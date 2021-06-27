using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Dto;
namespace shadchanut.Controllers
{
    [RoutePrefix("api/shadchanit")]
    [EnableCors(methods: "*", headers: "*", origins: "*")]
    public class ShadchanitController : ApiController
    {
        [Route("getShdchanit")]
        [HttpPost]
        public IHttpActionResult GetShdchanit(ShadchanitDto s)
        {
            bool b=  BL.shadchanitBL.GetShdchanit(s);
            //  BlClass1 bl = new BlClass1();
            return Ok(b);
        }
    }
}    
 
    