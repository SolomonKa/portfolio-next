export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(body);

    if (!body) {
      return new Response(JSON.stringify({ error: "Request Failed" }), {
        status: 400,
      });
    }
    return new Response(JSON.stringify({ message: "Success" }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
