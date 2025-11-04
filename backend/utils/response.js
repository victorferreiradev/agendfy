// backend/utils/response.js
export function sendSuccess(res, data = null, message = "OK") {
  return res.json({ success: true, message, data });
}

export function sendError(res, errorMessage = "Erro", status = 400, details = null) {
  const payload = { success: false, error: errorMessage };
  if (details) payload.details = details;
  return res.status(status).json(payload);
}
