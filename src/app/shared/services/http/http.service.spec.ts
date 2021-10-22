import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestData, createTestDatas } from "./http.service.specharness";
import { HttpService } from "./http.service";
import { RouterTestingModule } from "@angular/router/testing";
import { TestBed } from "@angular/core/testing";

describe("HttpService", () => {
  let service: HttpService;
  let httpMock: HttpTestingController;
  let testDatas: TestData[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(HttpService);
    httpMock = TestBed.inject(HttpTestingController);
    testDatas = createTestDatas();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("makeGetRequest", () => {
    it("should be created", () => {
      expect(service.makeGetRequest).toBeTruthy();
    });

    it("it should be able to retrieve values from the API via GET", () => {
      service.makeGetRequest("/data/list").subscribe((values: TestData[]) => {
        expect(values.length).toBe(2);
        expect(values).toEqual(testDatas);
      });
      const request = httpMock.expectOne("/data/list");
      expect(request.request.method).toBe("GET");
      request.flush(testDatas);
    });
  });

  describe("makePostRequest", () => {
    it("should be created", () => {
      expect(service.makePostRequest).toBeTruthy();
    });

    it("it should be able to add values from the API via POST", () => {
      service.makePostRequest("/data", {}).subscribe((values: TestData[]) => {
        expect(values.length).toBe(2);
        expect(values).toEqual(testDatas);
      });
      const request = httpMock.expectOne("/data");
      expect(request.request.method).toBe("POST");
      request.flush(testDatas);
    });
  });

  describe("makePutRequest", () => {
    it("should be created", () => {
      expect(service.makePutRequest).toBeTruthy();
    });

    it("it should be able to update values from the API via PUT", () => {
      service.makePutRequest("/data/1", {}).subscribe((values: TestData[]) => {
        expect(values.length).toBe(2);
        expect(values).toEqual(testDatas);
      });
      const request = httpMock.expectOne("/data/1");
      expect(request.request.method).toBe("PUT");
      request.flush(testDatas);
    });
  });

  describe("makeDeleteRequest", () => {
    it("should be created", () => {
      expect(service.makeDeleteRequest).toBeTruthy();
    });

    it("it should be able to delete values from the API via DELETE", () => {
      service.makeDeleteRequest("/data/2", "").subscribe(() => {});
      const request = httpMock.expectOne("/data/2");
      expect(request.request.method).toBe("DELETE");
      request.flush(testDatas);
    });
  });

  describe("makePatchRequest", () => {
    it("should be created", () => {
      expect(service.makePatchRequest).toBeTruthy();
    });

    it("it should be able to update values from the API via PATCH", () => {
      service
        .makePatchRequest("/data/1", "")
        .subscribe((values: TestData[]) => {
          expect(values.length).toBe(2);
          expect(values).toEqual(testDatas);
        });
      const request = httpMock.expectOne("/data/1");
      expect(request.request.method).toBe("PATCH");
      request.flush(testDatas);
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
