import {KingolotoUri} from '../Config/kingoloto-uri';
import {BananalottoClient, ClientUri, Credentials} from 'bananalotto-client';

export class KingolotoClient extends BananalottoClient {
    public static init(credentials: Credentials, uri: ClientUri = new KingolotoUri()): Promise<KingolotoClient> {
        const kingoloto = new KingolotoClient(uri);
        return kingoloto.connect(credentials);
    }
}
