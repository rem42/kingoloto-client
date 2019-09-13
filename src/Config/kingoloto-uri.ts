import {ClientUri} from 'bananalotto-client';

export class KingolotoUri implements ClientUri {
    public host = 'www.kingoloto.com';
    public connectUri = '/include/login.php';
    public playUri = '/play.php';
    public winnerUri = '/winners.php';
    public gridUri = '/urlCdv.php';
}
