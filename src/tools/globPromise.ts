import * as glob  from 'glob';
import { isNull } from 'util';

export default function globPromise(pattern: string, options: glob.IOptions):Promise<string[]>{
    return new Promise((resolve,reject)=>{
        glob(pattern, options, function (error, files) {
            if(isNull(error)){
                resolve(files)
            }else{
                reject(error);
            }
        });

    });
}