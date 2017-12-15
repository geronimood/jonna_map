var map;
var initialCenter;
var berlinCenter;
var largeInfoWindow;
var markers = [];
var slideIndex;

// Array with the initial locations.
var initialLocations = [
  {
    title: 'St. Joseph Krankenhaus',
    location: {lat: 52.478116, lng: 13.37389},
    id: 1,
    images:
    [
      'https://dl.dropboxusercontent.com/s/1wkk7gxrlh71le5/IMG_0027.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/odrhniqdl655hge/IMG_0104.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/o6i7y39xrc9xm0q/IMG_0105.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/feeaomgqx6voyqk/IMG_0113.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/r8dimsrdzl76abj/IMG_3735.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/r9mgzfjqtlkulm4/IMG_3737.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/y1t5hiab9gu9zms/IMG_3741.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/hnvsnoh1r20kt0c/IMG_3745.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/zrdnwjwss66kncl/IMG_3746.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/x3sdou4v8b5eeck/IMG_3749.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/x6cko14rk95saie/IMG_3750.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/tpw12zdzf3o2rev/IMG_3752.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/p3r5guk7mo3snst/IMG_3754.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/cgxfj9cwe5qjlc1/IMG_3777.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/emiowp8adx7ue67/IMG_3778.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/xqsojickalatval/IMG_3783.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/r9zfhkryxeado22/IMG_3787.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/3heuesqx6ys1g1r/IMG_3795.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/6hcfulbgq7qz3rg/IMG_3803.JPG?raw=1'
    ]
  },
  {
    title: 'Tempelhofer Feld',
    location: {lat: 52.4742941, lng: 13.4146008},
    id: 2,
    images:
    [
      'https://dl.dropboxusercontent.com/s/u0homizl2q1w7vs/IMG_3906.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/cdcdjcaaf3ktc42/IMG_3943.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/t6eqjdy4is9znvm/IMG_3983.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/wkhf296gyjx3ku8/IMG_4041.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/p6re69qcn2hhpxp/IMG_4051.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/yngjuf10xvugme1/thumb_IMG_3337_1024.jpg?raw=1'
    ]
  },
  {
    title: 'Kienietzer 98 - Home Sweet Home',
    location: {lat: 52.4762807, lng: 13.425673},
    id: 3,
    images:
    [
      'https://dl.dropboxusercontent.com/s/nno432s5nclok7v/IMG_0044.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/e50z9s3bqz2p21s/IMG_0117.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/o98fppbm1iyjzm1/IMG_0118.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/p183d4n94zgd5y1/IMG_0129%202.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/iqjmdooo7m27isw/IMG_0196.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/7vhwy34etvhqhpf/IMG_3248.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/gcoemdyaqndtxu4/IMG_3268.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/tqdsawigpywa4lv/IMG_3271.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/0uol17wex4limsq/IMG_3273.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/t0nzdmvash34rpi/IMG_3278.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/x26m59vmq2uxcai/IMG_3307.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/prsd3if3roevxno/IMG_3308.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/5fxdv6ppbc5iadb/IMG_3759.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/4zxdjbj9w6z4itr/IMG_3760.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/g1txhu80f61vdg6/IMG_3762.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/elp1kxzaotwc6y3/IMG_3764.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/onngn9vnmqdnm62/IMG_3765.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/fa6e3p7afrdm3uh/IMG_3769.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/o34rel4swpd9uz1/IMG_3772.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/cydnp1ycy26zuxy/IMG_3834.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/mje1yt351e9gwnq/IMG_3868.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/plnflyz79i6w2ch/IMG_3879.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/tn1y3shdvyhku6d/IMG_3888.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/l74sxn05wc68z2y/IMG_3892.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/p566ci05yfa2ovc/IMG_3894.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/h525iyrlq691115/IMG_3895.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/8jy3fh34o24s0wh/IMG_3917.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/fwszo3bud2ifn6i/IMG_3921.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/yj06xeb2zx4wd0h/IMG_3929.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/gse8i8rnei3zhkn/IMG_3938.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/irg733lkm4ysbvf/IMG_3944.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/bqb2h6yimsz6s6n/IMG_3948.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/sqrprcg5j1r4z5g/IMG_3951.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/jqwlonsaq9prxnr/IMG_3958.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/hi2d61tvlcrjke5/IMG_3961.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/8nxr7g2n07kuqsx/IMG_3975.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/x0yeravf69ocl1p/IMG_4042.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/7qkhcagpgs9828x/IMG_4044.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/phs08gj811tj7ni/IMG_4047.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/kvazq176yx8ttf6/IMG_4065.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/yujqhfa5mhaen8v/IMG_4117.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/m82w9ivak3hkscl/IMG_4124.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/mzkhrdq8x5x288y/IMG_4125.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/byh6komqypc5te7/IMG_4126.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/y8mb0hn4dcm9x18/IMG_4127.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/w0r6c6wk2ml9v2l/IMG_4129.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/57bbwionr3uejyx/IMG_4194.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/jp1czbs6fbeys7m/IMG_4195.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/6otb932whhrv4uu/IMG_4197.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/atp94nn52qyozq0/IMG_4246.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/bie3enhtrqz55x0/IMG_4247.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/vrvrwjiax2rc8vd/IMG_4250.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/omre56bx64cwy5t/IMG_4255.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/hm0utobgcx8m7r6/IMG_4274.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/bwa2n7gpmbyd0la/IMG_4297.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/rcl3mpfh8sp6tw3/IMG_4316.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/o2pqswdqnm9ys0g/IMG_4355.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/bxbfq39yk1z7fhh/IMG_4546.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/5zw6r0pzdb0u24a/IMG_4581.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/so9icz65xgzf4bb/IMG_4712.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/ve2ei52ido8he1d/IMG_4768.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/0dgu9ssbldbqn5t/IMG_4774.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/1njcxfebd84bhgs/IMG_4945.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/em9uthn35yug6fw/IMG_4946.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/ee5x8da71zliaj4/IMG_5003.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/x85czgeasunuej0/IMG_5094.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/cxf7eitac1s35yr/IMG_5096.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/vznjknxuvxs4ymm/IMG_5121.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/cad6vuaz4wkdp9q/IMG_5132.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/syypt495nfv3n48/IMG_5150.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/h4o0w5b98nq5wwg/IMG_5284.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/t1uhktr7tseci7x/thumb_IMG_2393_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/n982m0dq5rlgg05/thumb_IMG_2418_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/eg6tnj0fc9m8k66/thumb_IMG_2984_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/cgadb8ovkmuh3yj/thumb_IMG_3144_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/nt69gd8262mued0/thumb_IMG_3245_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/w5uz72kagd09gm4/thumb_IMG_3311_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/ptlitcwu17uu1nx/thumb_IMG_3315_1024.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/p3o2xly7eyjdqq5/thumb_IMG_3318_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/x253zsobmjctnuk/thumb_IMG_3322_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/lofyrcnni6afwxy/thumb_IMG_3341_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/x2o96o0yv4euqi0/thumb_IMG_3430_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/t1sxtzd4x11s2g0/thumb_IMG_3447_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/lues19wrje802gv/thumb_IMG_3604_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/8rf3q94cv0rxoj0/thumb_IMG_3629_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/vyp62hkb7o2t5ec/thumb_IMG_3667_1024%202.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/ebdhzmgey2civsq/thumb_IMG_3764_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/28i17pwvnwwzry2/thumb_IMG_E2744_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/zy4wis3retkdq9j/thumb_IMG_E2880_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/4j6zkz2sbhzb2yv/thumb_IMG_E2884_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/o99febr5csv1xli/thumb_IMG_E2885_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/pa802kkjrlol0dv/thumb_IMG_E2947_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/j5ab1ynbq76bfyu/thumb_IMG_E3126_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/0jv3xt75s18yq8g/thumb_IMG_E3385_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/sagvv06d7x9w2h5/thumb_IMG_E3387_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/ysly2vy6apx3xwy/thumb_IMG_E3391_1024.jpg?raw=1'
    ]
  },
  {
    title: 'Sonnenallee 72',
    location: {lat: 52.4839232, lng: 13.4329213},
    id: 4,
    images:
    [
      'https://dl.dropboxusercontent.com/s/1tp7isclv40yp38/FullSizeRender%2037.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/qiksq2hhj9kpw4p/IMG_0898.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/m7ceg57mbcmy8ou/IMG_3813.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/sbogp7o8zg0591w/IMG_3815.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/z5isn28bdeowpb2/IMG_3901.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/dj9b6m7mkm1gi9z/IMG_4058.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/24hdu7oqz5ilogb/IMG_4068.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/2r7fbdk47km6561/IMG_4071.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/pjmsivwhtod92t7/IMG_4072.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/oix2j4i2bcccrev/IMG_4074.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/pvihk4mb8zvtcrz/IMG_4109.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/epkofj1muyd9t4p/IMG_4154.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/bxw34gs4gbxtbuy/IMG_4263.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/mhx4498c8o5fb5i/IMG_4730.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/n6fxnyxjaxdpaft/IMG_4825.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/1wznxwjck3o1dr0/IMG_4930.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/dypnuayxbsk7c3k/IMG_4933.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/1ctz0tqyz5u0qas/IMG_4936.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/nr3da6lxp6bmxst/IMG_4981.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/zsktclp5gx0yb7w/IMG_5063.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/5agc2gjyvulp4hw/IMG_5069.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/wg3u3ij1sc1rvv3/thumb_IMG_3208_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/f7mr35x6ta304wa/thumb_IMG_3675_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/xtq0p2q2w1e8eyo/thumb_IMG_3762_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/fydkgj0l2fdy026/thumb_IMG_3790_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/pmptktjnnmlyv3i/thumb_IMG_3794_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/e5y3has4klfaxvq/thumb_IMG_E3306_1024.jpg?raw=1'
    ]
  },
  {
    title: 'Hasenheide',
    location: {lat: 52.482901, lng: 13.407235},
    id: 5,
    images:
    [
      'https://dl.dropboxusercontent.com/s/vmuilq12xj631s9/IMG_4187.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/vhy8wxtr3ppv06s/IMG_4850.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/hmfxvn6ljlz4ld5/thumb_IMG_2609_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/xl0fm2x7druwnbh/thumb_IMG_2768_1024.jpg?raw=1'
    ]
  },
  {
    title: 'Kassel',
    location: {lat: 51.3344827, lng: 9.4973313},
    id: 6,
    images:
    [
      'https://dl.dropboxusercontent.com/s/2bs436qyv02frlf/IMG_4210.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/qb3b7mnrgj9d7kj/IMG_4211.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/c967egyp8zru55m/IMG_4215.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/pvrjbl6onk01xyy/IMG_4216.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/ak6g615yylx87h0/IMG_4356.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/bnrlftcg6itip82/IMG_4360.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/0cue6y79renbbsq/IMG_4361.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/q9ln4anxffy8ew0/IMG_4363.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/bnjkxyejo9bfuir/IMG_4370.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/yp8c2mqauoo2su4/IMG_4373.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/798244gtnkyjp2y/IMG_4543.jpg?raw=1'
    ]
  },
  {
    title: 'Ulm',
    location: {lat: 48.409296, lng: 9.9546359},
    id: 7,
    images:
    [
      'https://dl.dropboxusercontent.com/s/68xckp6jshhj2ky/IMG_4378.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/qs8z7qwk6kf1o97/IMG_4379.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/ayc7yal94ye9lt5/IMG_4392.JPG?raw=1'
    ]
  },
  {
    title: 'Vogesen - Hautes Huttes',
    location: {lat: 48.0987658, lng: 7.10977},
    id: 8,
    images:
    [
      'https://dl.dropboxusercontent.com/s/rvhdr8q04zxecmr/IMG_3515.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/e7h7wxksonb3ayh/IMG_3558.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/royuxm01eabp542/IMG_4428.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/j01pq2a8ppvxwos/IMG_4433.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/aybwj3l5ic5sheu/IMG_4441.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/t6mw5cp5jsyjyri/IMG_4444.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/qjopm7m8cqpf51r/IMG_4456.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/lntch2zc0savmxq/IMG_4496.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/f7sywggdkzq3lly/IMG_4509.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/6svs96o9jaqnpb7/IMG_4530.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/enx35nawwzywpqz/IMG_4532.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/can7b0ilv8xu3pg/IMG_4538.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/p0z1tga8ky56k9y/thumb_IMG_2901_1024.jpg?raw=1'
    ]
  },
  {
    title: 'Atlantik - Carcans Plage',
    location: {lat: 45.0826302, lng: -1.1956478},
    id: 9,
    images:
    [
      'https://dl.dropboxusercontent.com/s/2ozpa76hx9m9idx/thumb_IMG_3650_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/n5vz0du3ygrmni5/thumb_IMG_3653_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/4yfj36dyieayf8y/thumb_IMG_3667_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/mwqd3ufcxcczvph/thumb_IMG_3674_1024.jpg?raw=1'
    ]
  },
  {
    title: 'Buergeramt Tempelhof',
    location: {lat: 52.4621986, lng: 13.3856074},
    id: 10,
    images:
    [
      'https://dl.dropboxusercontent.com/s/u6l4k82rvxxak4c/IMG_4698.JPG?raw=1'
    ]
  },
  {
    title: 'Csabis Buero',
    location: {lat: 52.4994332, lng: 13.4319712},
    id: 11,
    images:
    [
      'https://dl.dropboxusercontent.com/s/ty2v7mfxxg5kx50/IMG_5074.JPG?raw=1'
    ]
  },
  {
    title: 'Flughafen Schoenefeld',
    location: {lat: 52.3854444, lng: 13.5194261},
    id: 12,
    images:
    [
      'https://dl.dropboxusercontent.com/s/nsc82hmag17wta4/IMG_4870.JPG?raw=1'
    ]
  },
  {
    title: 'Fulda 6',
    location: {lat: 52.4829832, lng: 13.4328913},
    id: 13,
    images:
    [
      'https://dl.dropboxusercontent.com/s/ezqhyfl8wk9d6p8/IMG_4562.JPG?raw=1'
    ]
  },
  {
    title: 'Goerlitzer Park',
    location: {lat: 52.4965095, lng: 13.4355578},
    id: 14,
    images:
    [
      'https://dl.dropboxusercontent.com/s/6s49xhei7mpi4d3/IMG_4985.JPG?raw=1'
    ]
  },
  {
    title: 'Kreuz-Koelln',
    location: {lat: 52.4871557, lng: 13.4367517},
    id: 15,
    images:
    [
      'https://dl.dropboxusercontent.com/s/3oi145m86d2tti7/thumb_IMG_3255_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/jtqxo7zss4zwhfq/thumb_IMG_3569_1024.jpg?raw=1'
    ]
  },
  {
    title: 'Prinzenbad',
    location: {lat: 52.497381, lng: 13.4023118},
    id: 16,
    images:
    [
      'https://dl.dropboxusercontent.com/s/igxvotzow8xuq0p/IMG_4038.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/s1f9exupn2vf42h/IMG_4059.JPG?raw=1'
    ]
  },
  {
    title: 'Schillerkiez',
    location: {lat: 52.477002, lng: 13.4209917},
    id: 17,
    images:
    [
      'https://dl.dropboxusercontent.com/s/9b71bhu42l0fclb/IMG_3845.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/3jintzs49ovksls/IMG_3862.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/4fjuqgt5nmgfbo8/IMG_4078.JPG?raw=1',
      'https://dl.dropboxusercontent.com/s/pcasjvn97urddar/IMG_4082.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/xnfm0fq6iwhrh3w/thumb_IMG_2601_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/pypdjqj8tme6l8p/thumb_IMG_3295_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/k7ijikbag6vs3c6/thumb_IMG_3299_1024.jpg?raw=1',
      'https://dl.dropboxusercontent.com/s/y7qponi85w97t5x/thumb_IMG_E3457_1024.jpg?raw=1'

    ]
  },
];

// Function initMap is called by the google API callback.
function initMap() {
  // Definitions of some styles for the map.
  var styles = [
    {
      featureType: 'water',
      stylers: [
        { color: '#19a0d8' }
      ]
    },{
      featureType: 'administrative',
      elementType: 'labels.text.stroke',
      stylers: [
        { color: '#ffffff' },
        { weight: 6 }
      ]
    },{
      featureType: 'administrative',
      elementType: 'labels.text.fill',
      stylers: [
        { color: '#e85113' }
      ]
    },{
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        { color: '#efe9e4' },
        { lightness: -40 }
      ]
    },{
      featureType: 'transit.station',
      stylers: [
        { weight: 9 },
        { hue: '#e85113' }
      ]
    },{
      featureType: 'road.highway',
      elementType: 'labels.icon',
      stylers: [
        { visibility: 'off' }
      ]
    },{
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
        { lightness: 100 }
      ]
    },{
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        { lightness: -100 }
      ]
    },{
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        { visibility: 'on' },
        { color: '#f0e4d3' }
      ]
    },{
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        { color: '#efe9e4' },
        { lightness: -25 }
      ]
    }
  ];

  // Constructor creates a new map.
  initialCenter = {lat: 48.0987658, lng: 7.10977};
  berlinCenter = {lat: 52.4742941, lng: 13.4146008};
  map = new google.maps.Map(document.getElementById('map'), {
    center: initialCenter,
    zoom: 5,
    styles: styles,
    mapTypeControl: false
  });
  largeInfoWindow = new google.maps.InfoWindow();
  ko.applyBindings(new ViewModel());
};

// Location class
var Location = function(data) {
  var self = this;

  this.title = data.title;
  this.location = data.location;
  this.images = data.images;
  this.id = data.id;

  this.slideshow = createSlideshow(this.images, this.id);

  this.visible = ko.observable(true);

  var defaultIcon = makeMarkerIcon('0091ff');

  var highlightedIcon = makeMarkerIcon('FFFF24');

  // Creation of a new marker for each new Location.
  this.marker = new google.maps.Marker({
      position: this.location,
      title: this.title,
      id: this.id,
      length: this.images.length,
      icon: defaultIcon,
      animation: google.maps.Animation.DROP
  });

  // Event listener for click on marker -> runs populateInfoWindow function.
  this.marker.addListener('click', function() {
    populateInfoWindow(this, self.slideshow, largeInfoWindow);
  });

  // Event listener for mouseover on marker -> runs setIcon function.
  this.marker.addListener('mouseover', function() {
    this.setIcon(highlightedIcon);
  });

  // Event listener for mouseout on marker -> runs setIcon function.
  this.marker.addListener('mouseout', function() {
    this.setIcon(defaultIcon);
  });

  // function for showInfoWindow when marker is clicked.
  this.showInfoWindow = function() {
    google.maps.event.trigger(self.marker, 'click');
  };

  // function for highlightMarker when mouseover marker.
  this.highlightMarker = function() {
    google.maps.event.trigger(self.marker, 'mouseover');
  };

  // function for lowlightMarker when mouseout on marker.
  this.lowlightMarker = function() {
    google.maps.event.trigger(self.marker, 'mouseout');
  };
}

// The ViewModel.
var ViewModel = function() {
  var self = this;

  this.locationList = ko.observableArray([]); // Define an ko.observable array for the locationList...

  initialLocations.forEach(function(locationItem) { // ... and push each of the initialLocations with a new Location Class item to the array.
    self.locationList.push(new Location(locationItem));
  });

  this.filterInput = ko.observable('');

  // Function for the filter. Data-bind within the list class allows for display of filtered items only.
  this.filterList = ko.computed(function() {
    var filterItem = this.filterInput().toLowerCase();
    if (!filterItem) {
      this.locationList().forEach(function(locationItem) {
        locationItem.visible(true);
        locationItem.marker.setMap(map);
      });
      return this.locationList();
    } else {
        return ko.utils.arrayFilter(this.locationList(), function(locationItem) {
          var lowerCaseTitle = locationItem.title.toLowerCase();
          var result = (lowerCaseTitle.search(filterItem) >= 0);
          locationItem.visible(result);
          if (result) {
            locationItem.marker.setMap(map);
          } else {
            locationItem.marker.setMap(null);
          }
          return result;
        });
      }
    }, this);

    this.showAll = function() {
      map.setCenter(initialCenter);
      map.setZoom(5);
    }

    this.showBerlin = function() {
      map.setCenter(berlinCenter);
      map.setZoom(12);
    }
};

// Function for changing the marker color.
function makeMarkerIcon(markerColor) {
  var markerImage = new google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
    '|40|_|%E2%80%A2',
    new google.maps.Size(21,34),
    new google.maps.Point(0,0),
    new google.maps.Point(10,34),
    new google.maps.Size(21,34));
  return markerImage;
};

// Function for creating the image Slideshow

function createSlideshow(pictures, id) {
  var output = '<div class="slideshow">';
  for (var i = 0; i < pictures.length; i++) {
    output += '<img id="I' + id + '_' + i + '" src="' + pictures[i]  + '">';
  }
  output += '<button class="button-left" onclick="plusDivs(-1, I' + id + ', ' + pictures.length + ')">&#10094;</button>';
  output += '<button class="button-right" onclick="plusDivs(+1, I'+ id + ', ' + pictures.length + ')">&#10095;</button>';
  output += '</div>';

  return output;
}

// Functions for animating the Slideshow

function plusDivs(n, id, length) {
  showDivs(slideIndex += n, id, length);
}

function showDivs(n, id, length) {
  if (n > length) {slideIndex = 1};
  if (n < 1) {slideIndex = length} ;
  for (var i = 0; i < length; i++) {
    $('div[id="I' + id + "_" + i + '"]').hide();
    //$('"#I' + id + '_' + k + '"').hide();
  }
  $('div[id="I' + id + "_" + slideIndex + '"]').show();

}

// Function for populating the InfoWindow with content.
function populateInfoWindow(marker, slideshow, infowindow) {
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent('<div id="infowindow">' + '<h3>' + marker.title + '</h3>' + '<h4>Relevant Pictures</h4>' + slideshow);
    infowindow.addListener('closeclick', function() {
      infowindow.setMarker = null;
    });
    slideIndex = 1;
    showDivs(slideIndex, marker.id, marker.length);
    infowindow.open(map, marker);
  }
};

// Function for displaying an error message if the Google Maps API cannot be accessed.
function googleError() {
  alert('There went something wrong when loading Google Maps - please try again!');
}
