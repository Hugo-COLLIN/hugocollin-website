export async function post(req, res) {
  const { firstName, lastName, email, message } = req.body;

  // Traitez les données du formulaire ici, par exemple en les envoyant par e-mail
  // ou en les enregistrant dans une base de données.

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ success: true }));
}