interface Response {
    data: {
        message: string;
    }
}

export default class HelpService {
    static async resolveClick(): Promise<Response> {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve({ 
                data: {
                    message: 'Que bom que seu problema foi resolvido',
                }
            }), 1000)
        })
    }
}