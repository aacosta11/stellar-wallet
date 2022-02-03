using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StellarWalletApi.Services;
using StellarWalletApi.Models.Account;

namespace StellarWalletApi.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountsController : ControllerBase
{
    [HttpGet("")]
    public string Hola() => "hola";

    [HttpGet("demo-keys")]
    public ActionResult<KeyPair> GetKeys() => GetKeyPairs.GetDemoKeys();
    
}