import { Injectable, Inject } from '@angular/core';
import { Http, HttpModule, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConfidentialsService {
  baseUrl: string;
  constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  doConfidentials(username: string): any {
    var signInVall = this.extractAwsSignInCode(username);
   this.http.post(this.baseUrl + "api/Authentication/Confidentials", signInVall).map(res => res.toString()).subscribe(
      success => {
     });
  }





  extractAwsSignInCode(StringToSign: string): string
    {
      //Authorization = "AWS" + " " + AWSAccessKeyId + ":" + Signature;

      //Signature = Base64(HMAC - SHA1(YourSecretAccessKeyID, UTF - 8 - Encoding - Of(StringToSign)));

      //StringToSign = HTTP - Verb + "\n" +
      //  Content - MD5 + "\n" +
      //  Content - Type + "\n" +
      //  Date + "\n" +
      //  CanonicalizedAmzHeaders +
      //  CanonicalizedResource;

      //CanonicalizedResource = ["/" + Bucket] +
      //  <HTTP-Request - URI, from the protocol name up to the query string> +
      //    [subresource, if present.For example "?acl", "?location", "?logging", or "?torrent"];

      //CanonicalizedAmzHeaders = <described below>
      return "AWS AKIAIOSFODNN7EXAMPLE:bWq2s1WEIj + Ydj0vQ697zp + IXMU=";
      }
  
}