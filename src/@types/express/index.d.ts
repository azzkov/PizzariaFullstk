//ADD variable user_id in Request requisiton context
declare namespace Express{
    export interface Request{
        user_id:string;
    }
}