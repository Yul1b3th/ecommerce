import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

// Cada vez que los usuarios hagan una peticion de entrada o de salida se va a ejecutar el interceptor
export const ErrorResponseInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => next(req).pipe(catchError(handleErrorResponde));

// Esta funcion se le pasa el operador CatchError de rxjs
function handleErrorResponde(error:HttpErrorResponse): ReturnType<typeof throwError> {
  const errorResponse = `Error code: ${error.status}, message: ${error.message}`;
  return throwError(() => errorResponse );
}
