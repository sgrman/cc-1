/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log("Logging: " + request.url)
	if(request.method == "POST") {
	  	return new Response('Thank you for using the POST method.' , {
			headers: {
				'content-type': 'application/json',
			},
		  });
		}
		else{
			return new Response('Sorry, you did not use the POST method.', {
				headers: {
					'content-type': 'application/json',
				},
			});
		}
	 }
	}
