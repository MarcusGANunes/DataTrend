const data = [
    {
     cnpj: 10732440000197,
     name: "COMERC POWER TRADING LTDA",
     date: 42552,
     price: 78.48860309436091,
     city: "SÃO PAULO"
    },
    {
     cnpj: 22141909000100,
     name: "CPFL BRASIL VAREJISTA DE ENERGIA LTDA.",
     date: 42552,
     price: 71.7928253834809,
     city: "CAMPINAS"
    },
    {
     cnpj: 19125927000186,
     name: "COPEL COMERCIALIZACAO S.A.",
     date: 42736,
     price: 72.68759849532519,
     city: "CURITIBA"
    },
    {
     cnpj: 4149295000113,
     name: "EDP COMERCIALIZACAO E SERVICOS DE ENERGIA SA",
     date: 42856,
     price: 68.389748981683,
     city: "SÃO PAULO"
    },
    {
     cnpj: 15027346000150,
     name: "MEGA WATT COMERCIALIZACAO DE ENERGIA LTDA",
     date: 42887,
     price: 70.81698775619228,
     city: "FLORIANÓPOLIS"
    },
    {
     cnpj: 26263019000114,
     name: "ENGIE COMERCIALIZADORA VAREJISTA DE ENERGIA LTDA.",
     date: 43040,
     price: 76.79879057075166,
     city: "FLORIANÓPOLIS"
    },
    {
     cnpj: 7760179000124,
     name: "FOCUS ENERGIA LTDA",
     date: 43160,
     price: 62.29248956048481,
     city: "SÃO PAULO"
    },
    {
     cnpj: 26203837000121,
     name: "AES TIETE INTEGRA SOLUCOES EM ENERGIA LTDA.",
     date: 43282,
     price: 78.18590578776158,
     city: "BAURU"
    },
    {
     cnpj: 28630316000186,
     name: "EDP COMERCIALIZACAO VAREJISTA LTDA.",
     date: 43497,
     price: 63.929986639094004,
     city: "SÃO PAULO"
    },
    {
     cnpj: 26940979000171,
     name: "ESFERA COMERCIALIZADORA DE ENERGIA LTDA",
     date: 43497,
     price: 69.17642163800106,
     city: "SÃO PAULO"
    },
    {
     cnpj: 1672223000168,
     name: "ENEL GREEN POWER CACHOEIRA DOURADA S.A",
     date: 43586,
     price: 62.00641202828871,
     city: "CACHOEIRA DOURADA"
    },
    {
     cnpj: 7642982000164,
     name: "QUANTA GERACAO S\/A",
     date: 43586,
     price: 68.36437284079743,
     city: "AREAL"
    },
    {
     cnpj: 11182210000164,
     name: "NOVA ENERGIA COMERCIALIZADORA S.A.",
     date: 43586,
     price: 73.84245548176645,
     city: "SÃO PAULO"
    },
    {
     cnpj: 17469701018700,
     name: "ARCELORMITTAL BRASIL S.A.",
     date: 43647,
     price: 61.84408108607614,
     city: "SERRA"
    },
    {
     cnpj: 25318508000163,
     name: "BROOKFIELD GESTAO E ENERGIA S.A.",
     date: 43678,
     price: 79.7585118002961,
     city: "RIO DE JANEIRO"
    },
    {
     cnpj: 7685694000197,
     name: "ENERGISA COMERCIALIZADORA DE ENERGIA LTDA.",
     date: 43770,
     price: 60.86411154838199,
     city: "RIO DE JANEIRO"
    },
    {
     cnpj: 17858631000149,
     name: "MATRIX COMERCIALIZADORA DE ENERGIA ELETRICA S\/A",
     date: 43800,
     price: 70.19633531881306,
     city: "SÃO PAULO"
    },
    {
     cnpj: 2691745000170,
     name: "TRADENER LIMITADA",
     date: 43800,
     price: 63.46766902689447,
     city: "CURITIBA"
    },
    {
     cnpj: 6981176000158,
     name: "CEMIG GERACAO E TRANSMISSAO S.A",
     date: 43831,
     price: 66.79992401249834,
     city: "BELO HORIZONTE"
    },
    {
     cnpj: 15087610000141,
     name: "ECEL ELETRON COMERCIALIZADORA DE ENERGIA S.A",
     date: 43862,
     price: 77.81537806911922,
     city: "RECIFE"
    },
    {
     cnpj: 15042149000100,
     name: "LOG ENERGIA COMERCIALIZADORA S.A.",
     date: 43862,
     price: 64.68528511639033,
     city: "SÃO PAULO"
    },
    {
     cnpj: 32023463000165,
     name: "SANTA MARIA COMERCIALIZACAO E SERVICOS DE ENERGIA LTDA.",
     date: 43891,
     price: 62.37103692987364,
     city: "COLATINA"
    },
    {
     cnpj: 5263973000137,
     name: "CEMIG TRADING S.A.",
     date: 43922,
     price: 66.5524832088452,
     city: "BELO HORIZONTE"
    },
    {
     cnpj: 4023261000188,
     name: "NC ENERGIA S.A.",
     date: 44044,
     price: 61.47861796654526,
     city: "RIO DE JANEIRO"
    },
    {
     cnpj: 26914969000161,
     name: "EXPONENCIAL ENERGIA LTDA",
     date: 44044,
     price: 60.52372982660837,
     city: "BAURU"
    },
    {
     cnpj: 3984862000194,
     name: "VOTENER-VOTORANTIM COMERCIALIZADORA DE ENERGIA LTDA.",
     date: 44197,
     price: 73.93974789809913,
     city: "SÃO PAULO"
    },
    {
     cnpj: 11315117000180,
     name: "LIGHTCOM COMERCIALIZADORA DE ENERGIA S.A.",
     date: 44256,
     price: 70.91117105894524,
     city: "SÃO PAULO"
    },
    {
     cnpj: 12809025000110,
     name: "PRIME ENERGY COMERCIALIZADORA DE ENERGIA EIRELI",
     date: 44256,
     price: 72.98236795756863,
     city: "SÃO PAULO"
    },
    {
     cnpj: 12019580000148,
     name: "CMU COMERCIALIZADORA VAREJISTA DE ENERGIA LTDA.",
     date: 44317,
     price: 76.30016132869906,
     city: "BELO HORIZONTE"
    },
    {
     cnpj: 14797440000126,
     name: "OMEGA COMERCIALIZADORA DE ENERGIA S.A.",
     date: 44317,
     price: 76.02074601486265,
     city: "SÃO PAULO"
    },
    {
     cnpj: 26268886000142,
     name: "VIBRA COMERCIALIZADORA DE ENERGIA S.A.",
     date: 44348,
     price: 66.02337962311908,
     city: "SÃO PAULO"
    },
    {
     cnpj: 34230109000137,
     name: "GREENYELLOW SERVICOS E COMERCIALIZACAO DE ENERGIA LTDA",
     date: 44378,
     price: 63.25105271247025,
     city: "SÃO PAULO"
    },
    {
     cnpj: 36160187000138,
     name: "LUZ INVESTIMENTOS E PARTICIPACOES S.A.",
     date: 44378,
     price: 61.21988099971555,
     city: "SÃO PAULO"
    },
    {
     cnpj: 15458171000136,
     name: "MIGRATIO GESTAO E COMERCIALIZACAO DE ENERGIA ELETRICA LTDA.",
     date: 44378,
     price: 66.24611234822733,
     city: "LIMEIRA"
    },
    {
     cnpj: 31627849000113,
     name: "AMBAR COMERCIALIZADORA DE ENERGIA LTDA",
     date: 44409,
     price: 68.74605005101333,
     city: "SÃO PAULO"
    },
    {
     cnpj: 36583766000193,
     name: "2W COMERCIALIZADORA VAREJISTA DE ENERGIA S.A.",
     date: 44440,
     price: 62.7114434280476,
     city: "SÃO PAULO"
    },
    {
     cnpj: 29000095000125,
     name: "TEMPO ENERGIA S.A.",
     date: 44501,
     price: 79.21806047216984,
     city: "SÃO PAULO"
    },
    {
     cnpj: 29754467000109,
     name: "CEL COMERCIALIZADORA DE ENERGIA - EIRELI",
     date: 44531,
     price: 73.72282854090759,
     city: "GOIANIA"
    },
    {
     cnpj: 29270235000266,
     name: "PLURAL GERACAO E COMERCIALIZACAO DE ENERGIA LTDA.",
     date: 44531,
     price: 74.52591016261943,
     city: "SÃO PAULO"
    }
   ]
   
   module.exports = data
