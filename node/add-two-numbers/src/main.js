export default async ({ req, res }) => {
  const getNumber = (name) => {
    if (req.query[name] !== undefined) {
      return Number(req.query[name]);
    }
    try {
      const body =
        typeof req.body === 'string'
          ? JSON.parse(req.body || '{}')
          : req.body || {};
      if (body && body[name] !== undefined) {
        return Number(body[name]);
      }
    } catch {}
    return NaN;
  };

  const a = getNumber('a');
  const b = getNumber('b');

  if (isNaN(a) || isNaN(b)) {
    return res.json({ error: 'Parameters a and b must be numbers' }, 400);
  }

  return res.json({ sum: a + b });
};
