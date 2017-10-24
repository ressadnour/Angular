using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using testref.Models;
using testref.ViewModels;

namespace testref.Controllers
{
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {

        [HttpPost("[action]")]
        public IActionResult Authenticate(AuthenticateViewModel model)
        {
                return Ok("True");
        }



        [HttpPost("[action]")]
        public IActionResult Confidentials(string model)
        {
            if (ExtractAwsSignInCode(model))
                return Ok("True");
            else return NotFound();
        }

        private bool ExtractAwsSignInCode(string code)
        {
            // extract StringToSign from reverse logic:
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


            // if Login is authenticated return true else false
            return true;
        }
    }
}
