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
    [RoutePrefix("api/Status")]
    public class StatusController : ApiController
    {
        [HttpGet]
        [Route("getStatusList")]

        public IHttpActionResult GetStatusList()
        {
            List<StatusDto> statusList = BL.statusBL.GetAllEda();
            if (statusList.Count() > 0)
                return Ok(statusList);
            return BadRequest();
        }

        [HttpPost]
        [Route("Post")]

        public IHttpActionResult Post(StatusDto s)
        {
            List<StatusDto> statusList = BL.statusBL.GetAllEda();
            if (statusList.Count() > 0)
                return Ok(true);
            return BadRequest();
        }

    }
}
