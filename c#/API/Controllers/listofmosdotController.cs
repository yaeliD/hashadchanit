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
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/listofmosdot")]
    public class listofmosdotController : ApiController
    {
        [HttpGet]
        [Route("getAllmosdot")]
        public IHttpActionResult GetAllmosdot()
        {
            List<listOfMosdotDto> mosdotList = BL.listofmosdotBL.GetAllmosdot();
            if (mosdotList.Count() > 0)
                return Ok(mosdotList);
            return BadRequest();
        }
    }
}
