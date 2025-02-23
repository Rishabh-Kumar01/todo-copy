// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpErrorResponse
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { ToastService } from '../services/toast.service';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//   constructor(private toastService: ToastService) {}

//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     return next.handle(request).pipe(
//       catchError((error: HttpErrorResponse) => {
//         // Example: show a toast message on error
//         this.toastService.showError('An error occurred!');
//         // You can log the error or do additional processing here
//         return throwError(() => error);
//       })
//     );
//   }
// }
