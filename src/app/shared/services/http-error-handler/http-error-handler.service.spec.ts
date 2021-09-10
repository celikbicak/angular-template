import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpErrorHandler } from './http-error-handler.service';

describe('HttpService', () => {
  let service: HttpErrorHandler;

  beforeEach(() => {
    service = TestBed.inject(HttpErrorHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('handleError', () => {
    it('should be created', () => {
      expect(service.handleError).toBeTruthy();
    });

    it('it should return status and statusText from HttpErrorResponse', () => {
      const errorResponse = new HttpErrorResponse({
        status: 404,
        statusText: 'Notfound',
      });

      const result = service.handleError(errorResponse);

      result.subscribe(
        () => {},
        (error) => {
          expect(error).toEqual('404: Notfound');
        }
      );
    });
  });
});
