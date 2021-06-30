import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('A função de gatilho HTTP processou uma solicitação.');
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". Esta função disparada por HTTP foi executada com sucesso."
        : "Esta função disparada por HTTP foi executada com sucesso. Passe um nome na string de consulta ou no corpo da solicitação para uma resposta personalizada.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;