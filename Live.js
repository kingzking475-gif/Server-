// Server/Live.js
export default async function handler(req, res) {
  try {
    const response = await fetch(`https://json.vnres.co/all_live_rooms.json?v=${Date.now()}`);
    const text = await response.text();
    res.status(200).send(text.slice(0, 500)); // just preview first 500 chars
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
