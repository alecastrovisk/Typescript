import {Request, Response} from 'express';
import createUser from './services/CreateUser';
import CreateUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        name: 'Alexadre',
        email: '@dkkddsd',
        password: '12234',
        tech: [
            'Node.js',
            'React.JS',
            {title: 'Javascript', experience: 100},
        ],
    });

    return response.json({message: 'Hello world'});

}