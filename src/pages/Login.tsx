import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "@/lib/Api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setToken } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        alert(data.error || data.message || "Erro no login");
        return;
      }
      
      // Salva token usando o hook
      setToken(data.token);
      
      // Redireciona para dashboard
      navigate("/dashboard");
    } catch (err) {
      alert("Erro ao conectar com API");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-6 shadow-elevated">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-foreground">Login</h1>
          <p className="text-muted-foreground mt-2">
            Acesse sua conta AgendFy
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              placeholder="Email" 
              type="email"
              className="w-full"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Input 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              placeholder="Senha" 
              type="password" 
              className="w-full"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full gradient-primary"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <button 
              onClick={() => navigate("/")}
              className="text-primary hover:underline"
            >
              Voltar para o início
            </button>
          </p>
        </div>
      </Card>
    </div>
  );
}