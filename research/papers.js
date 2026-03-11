// research/papers.js
// ─────────────────────────────────────────────────────────────
// To ADD a paper: prepend a new object to the PAPERS array.
// To ADD a patent: prepend a new object to the PATENTS array.
//
// Fields:
//   id        — unique string, used as DOM element ID prefix
//   title     — paper/patent title (string)
//   url       — link to paper/patent page
//   img       — path to static thumbnail (shown by default)
//   video     — path to hover video, or null
//   hoverImg  — path to hover image (if no video), or null
//   authors   — array of strings; "Rafael Pagés" is auto-bolded
//   venue     — journal / conference / patent number
//   year      — year as number, or null
//   highlight — true for notable papers (shown with accent bg)
//   award     — optional award string, e.g. "Best paper award"
//   links     — array of { label, url } for extra links
//   description — one-paragraph abstract / summary
// ─────────────────────────────────────────────────────────────

const PAPERS = [
  {
    id: "rgbd",
    title: "RGB-D-Fusion: Image Conditioned Depth Diffusion of Humanoid Subjects",
    url: "https://ieeexplore.ieee.org/abstract/document/10239167",
    img: "research/rgbd.jpeg",
    video: "research/rgbd.mp4",
    hoverImg: null,
    authors: ["Sascha Kirch", "Valeria Olyunina", "Jan Ondrej", "Rafael Pagés", "Sergio Martín", "Clara Pérez-Molina"],
    venue: "IEEE Access, Vol 11",
    year: 2023,
    highlight: false,
    links: [],
    description: "We present RGB-D-Fusion, a multi-modal conditional denoising diffusion probabilistic model to generate high resolution depth maps from low-resolution monocular RGB images of humanoid subjects."
  },
  {
    id: "volvideo",
    title: "Volumetric Video Content Creation for Immersive XR Experiences",
    url: "https://library.imaging.org/lim/articles/3/1/13",
    img: "research/pagans.jpg",
    video: "research/volvideo.mp4",
    hoverImg: null,
    authors: ["Aljosa Smolic", "Konstantinos Amplianitis", "Matthew Moynihan", "Neill O'Dwyer", "Jan Ondrej", "Rafael Pagés", "Gareth Young"],
    venue: "London Imaging Meeting",
    year: 2023,
    highlight: false,
    links: [],
    description: "This paper highlights technology for VV content creation developed by the V-SENSE lab and the startup company Volograms. It further showcases a variety of creative experiments applying VV for immersive storytelling in XR."
  },
  {
    id: "vologan",
    title: "VoloGAN: Adversarial Domain Adaptation for Synthetic Depth Data",
    url: "https://arxiv.org/abs/2207.09204",
    img: "research/vologan.jpg",
    video: "research/vologan_after.mp4",
    hoverImg: null,
    authors: ["Sascha Kirch", "Sergio Arnaldo", "Sergio Martín", "Rafael Pagés"],
    venue: "Arxiv",
    year: 2022,
    highlight: false,
    links: [],
    description: "We present VoloGAN, an adversarial domain adaptation network that translates synthetic RGB-D images of a high-quality 3D model of a person, into RGB-D images that could be generated with a consumer depth sensor."
  },
  {
    id: "dataset",
    title: "Volograms & V-SENSE Volumetric Video Dataset",
    url: "http://dx.doi.org/10.13140/RG.2.2.24235.31529/1",
    img: "research/dataset.jpg",
    video: "research/dataset.mp4",
    hoverImg: null,
    authors: ["Rafael Pagés", "Emin Zerman", "Konstantinos Amplianitis", "Jan Ondrej", "Aljosa Smolic"],
    venue: "ISO/IEC JTC1/SC29/WG07 MPEG2021/m56767",
    year: 2021,
    highlight: false,
    links: [
      { label: "project page", url: "https://volograms.com/research-datasets" }
    ],
    description: "This paper describes the Volograms & V-SENSE Volumetric Video Dataset which is made publicly available to help said research and standardisation efforts."
  },
  {
    id: "facemirror",
    title: "Influence of Mirror Therapy (Specular Face Software) on Electromyographic Behavior of the Facial Muscles for Facial Palsy",
    url: "https://ieeexplore.ieee.org/abstract/document/6116055",
    img: "research/face-mirror.jpg",
    video: "research/facemirror_after.mp4",
    hoverImg: null,
    authors: ["Alfonso Gil-Martínez", "Sergio Lerma-Lara", "Alfredo Hernando-Jorge", "Ana Campos-Vegas", "Audrey Aceval", "Rafael Pagés", "Francisco Morán", "Hector Beltran-Alacreu"],
    venue: "Brain Sciences, 11(7), 930",
    year: 2021,
    highlight: false,
    links: [],
    description: "Using facial detection and tracking to simulate mirror therapy to help patients with facial paralysis."
  },
  {
    id: "autotrack",
    title: "Autonomous Tracking For Volumetric Video Sequences",
    url: "https://v-sense.scss.tcd.ie/wp-content/uploads/2020/12/WACV_2021_preprint_compressed.pdf",
    img: "research/autotrack.jpg",
    video: "research/autotrack.mp4",
    hoverImg: null,
    authors: ["Matt Moynihan", "Susana Ruano", "Rafael Pagés", "Aljosa Smolic"],
    venue: "WACV",
    year: 2021,
    highlight: false,
    links: [
      { label: "project page", url: "https://v-sense.scss.tcd.ie/research/6dof/autonomous-tracking-for-volumetric-video-sequences/" },
      { label: "video", url: "https://www.youtube.com/watch?v=JwO2obk0tJM" }
    ],
    description: "A robust, autonomous method for tracking volumetric sequences which can detect missing geometry and propagate user edits."
  },
  {
    id: "selfreg",
    title: "A Self-regulating Spatio-Temporal Filter for Volumetric Video Point Clouds",
    url: "https://v-sense.scss.tcd.ie/wp-content/uploads/2020/05/mm2020Cloud_compressed.pdf",
    img: "research/selfreg.jpg",
    video: "research/selfreg.mp4",
    hoverImg: null,
    authors: ["Matt Moynihan", "Rafael Pagés", "Aljosa Smolic"],
    venue: "Computer Vision, Imaging and Computer Graphics Theory and Applications, Springer",
    year: 2020,
    highlight: false,
    links: [
      { label: "project page", url: "https://v-sense.scss.tcd.ie/research/6dof/spatio-temporal-upsampling-for-free-viewpoint-video-point-clouds/" },
      { label: "book chapter", url: "https://link.springer.com/chapter/10.1007%2F978-3-030-41590-7_16" }
    ],
    description: "A self-regulating filter that is capable of performing accurate upsampling of dynamic point cloud data sequences captured using wide-baseline multi-view camera setups."
  },
  {
    id: "inf",
    title: "Augmenting Hand-Drawn Art with Global Illumination Effects through Surface Inflation",
    url: "https://v-sense.scss.tcd.ie/wp-content/uploads/2019/12/CVMP2019.pdf",
    img: "research/inf1.jpg",
    video: "research/inflation.mp4",
    hoverImg: null,
    authors: ["Matis Hudon", "Sebastian Lutz", "Rafael Pagés", "Aljosa Smolic"],
    venue: "European Conference on Visual Media Production (CVMP)",
    year: 2019,
    highlight: false,
    links: [
      { label: "project page", url: "https://v-sense.scss.tcd.ie/research/augmenting-hand-drawn-art-with-global-illumination-effects-through-surface-inflation/" }
    ],
    description: "A method for augmenting hand-drawn characters and creatures with global illumination effects."
  },
  {
    id: "toon",
    title: "2DToonShade: A stroke based toon shading system",
    url: "https://www.sciencedirect.com/science/article/pii/S2590148619300032",
    img: "research/toon.jpg",
    video: "research/toon.mp4",
    hoverImg: null,
    authors: ["Matis Hudon", "Mairead Grogan", "Rafael Pagés", "Jan Ondrej", "Aljosa Smolic"],
    venue: "Computers & Graphics: X Volume 1",
    year: 2019,
    highlight: false,
    links: [],
    description: "A semi-automatic method for creating shades and self-shadows in cel animation."
  },
  {
    id: "visapp",
    title: "Spatio-Temporal Upsampling for Free Viewpoint Video Point Clouds",
    url: "https://v-sense.scss.tcd.ie/wp-content/uploads/2019/05/VISIGRAPP_2019camera-ready.pdf",
    img: "research/visapp.jpg",
    video: "research/visapp.mp4",
    hoverImg: null,
    authors: ["Matt Moynihan", "Rafael Pagés", "Aljosa Smolic"],
    venue: "Computer Vision, Imaging and Computer Graphics Theory and Applications, Springer",
    year: 2019,
    highlight: false,
    links: [
      { label: "project page", url: "https://v-sense.scss.tcd.ie/research/6dof/spatio-temporal-upsampling-for-free-viewpoint-video-point-clouds/" }
    ],
    description: "An approach to upsampling point cloud sequences captured through a wide baseline camera setup in a spatio-temporally consistent manner."
  },
  {
    id: "fvv",
    title: "Affordable Content Creation for Free-viewpoint Video and VR/AR Applications",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S1047320318300683",
    img: "research/fvv.jpg",
    video: "research/fvv.mp4",
    hoverImg: null,
    authors: ["Rafael Pagés", "Konstantinos Amplianitis", "David Monaghan", "Jan Ondrej", "Aljosa Smolic"],
    venue: "Journal of Visual Communication and Image Representation, Volume 53",
    year: 2018,
    highlight: true,
    award: "Best paper award",
    links: [
      { label: "project page", url: "https://v-sense.scss.tcd.ie/research/6dof/affordable-content-creation-for-free-viewpoint-video-and-vr-ar-applications/" },
      { label: "video", url: "https://www.youtube.com/watch?v=KY1375qlhQo&feature=emb_title" }
    ],
    description: "A scalable pipeline for Free-Viewpoint Video (FVV) content creation, considering also visualisation in Augmented Reality and Virtual Reality."
  },
  {
    id: "swift",
    title: "Jonathan Swift: Augmented Reality Application for Trinity Library's Long Room",
    url: "https://v-sense.scss.tcd.ie/wp-content/uploads/2019/01/ODwyer2018_Chapter_JonathanSwiftAugmentedRealityA-2.pdf",
    img: "research/swift.jpg",
    video: "research/swift.mp4",
    hoverImg: null,
    authors: ["Néill O'Dwyer", "Jan Ondrej", "Rafael Pagés", "Konstantinos Amplianitis", "Aljosa Smolic"],
    venue: "International Conference on Interactive Digital Storytelling",
    year: 2018,
    highlight: false,
    links: [
      { label: "project page", url: "https://v-sense.scss.tcd.ie/creative-experiments/jonathan-swift-in-vr-ar-long-room-project/" }
    ],
    description: "The interactive prototype visualises Jonathan Swift in AR, allowing the user to be immersed in world of cultural heritage."
  },
  {
    id: "bplay",
    title: "Samuel Beckett in VR: Exploring narrative using free viewpoint video",
    url: "https://www.mitpressjournals.org/doi/abs/10.1162/leon_a_01721",
    img: "research/bplay.jpg",
    video: "research/bplay.mp4",
    hoverImg: null,
    authors: ["Néill O'Dwyer", "Nicholas Johnson", "Rafael Pagés", "Jan Ondrej", "Konstantinos Amplianitis", "Enda Bates", "David Monaghan", "Aljosa Smolic"],
    venue: "ACM SIGGRAPH – Leonardo, MIT Press",
    year: 2018,
    highlight: false,
    links: [
      { label: "project page", url: "https://v-sense.scss.tcd.ie/research/mr-play-trilogy/" },
      { label: "video", url: "https://www.youtube.com/watch?v=SKZ43EMEiI4&feature=emb_title" }
    ],
    description: "Virtual Play is a reinterpretation of Play, with a view to engaging a 21st Century viewership that is increasingly accessing content via VR."
  },
  {
    id: "deepnormal",
    title: "Deep Normal Estimation for Automatic Shading of Hand-Drawn Characters",
    url: "https://openaccess.thecvf.com/content_eccv_2018_workshops/w16/html/Hudon_Deep_Normal_Estimation_for_Automatic_Shading_of_Hand-Drawn_Characters_ECCVW_2018_paper.html",
    img: "research/deepnormal.jpg",
    video: "research/deepnormal.mp4",
    hoverImg: null,
    authors: ["Matis Hudon", "Mairead Grogan", "Rafael Pagés", "Aljosa Smolic"],
    venue: "ECCV",
    year: 2018,
    highlight: false,
    links: [
      { label: "project page", url: "https://v-sense.scss.tcd.ie/research/vfx-animation/deep-normal-estimation-for-automatic-shading-of-hand-drawn-characters/" },
      { label: "video", url: "https://www.youtube.com/watch?v=1tZ-y0PzV8g" },
      { label: "code", url: "https://github.com/V-Sense/DeepNormals" }
    ],
    description: "A new fully automatic pipeline for generating shading effects on hand-drawn characters."
  },
  {
    id: "cel",
    title: "2D Shading for Cel Animation",
    url: "https://dl.acm.org/doi/abs/10.1145/3229147.3229148",
    img: "research/cel.jpg",
    video: "research/cel.mp4",
    hoverImg: null,
    authors: ["Matis Hudon", "Rafael Pagés", "Mairead Grogan", "Jan Ondrej", "Aljosa Smolic"],
    venue: "Expressive Graphics",
    year: 2018,
    highlight: false,
    links: [
      { label: "project page", url: "https://v-sense.scss.tcd.ie/research/vfx-animation/2d-shading-for-cel-animation/" },
      { label: "video", url: "https://www.youtube.com/watch?v=4pFufShSt0c" }
    ],
    description: "A semi-automatic method for creating shades and self-shadows in cel animation."
  },
  {
    id: "beckett",
    title: "Virtual Play in Free-viewpoint Video: Reinterpreting Samuel Beckett for Virtual Reality",
    url: "https://ieeexplore.ieee.org/abstract/document/8088501",
    img: "research/beckett.jpg",
    video: "research/beckett.mp4",
    hoverImg: null,
    authors: ["Néill O'Dwyer", "Nicholas Johnson", "Enda Bates", "Rafael Pagés", "Jan Ondrej", "Konstantinos Amplianitis", "David Monaghan", "Aljosa Smolic"],
    venue: "IEEE ISMAR",
    year: 2017,
    highlight: false,
    links: [
      { label: "project page", url: "https://v-sense.scss.tcd.ie/research/mr-play-trilogy/" },
      { label: "video", url: "https://www.youtube.com/watch?v=SKZ43EMEiI4&feature=emb_title" }
    ],
    description: "Virtual Play is a reinterpretation of Play, with a view to engaging a 21st Century viewership that is increasingly accessing content via VR."
  },
  {
    id: "radar",
    title: "Simulation framework for a 3D high-resolution imaging radar at 300 GHz with a scattering model based on rendering techniques",
    url: "https://ieeexplore.ieee.org/abstract/document/7933257",
    img: "research/radar.jpg",
    video: "research/radar.mp4",
    hoverImg: null,
    authors: ["Guillermo Ortiz-Jiménez", "Federico García-Rial", "Luis A. Úbeda-Medina", "Rafael Pagés", "Narciso García", "Jesús Grajal"],
    venue: "IEEE Transactions on Terahertz Science and Technology, Volume 7",
    year: 2017,
    highlight: false,
    links: [],
    description: "A simulation framework for a 3D high-resolution imaging radar at 300 GHz with mechanical scanning."
  },
  {
    id: "ffeat",
    title: "Fast Feature Matching for Detailed Point Cloud Generation",
    url: "https://ieeexplore.ieee.org/abstract/document/7820978",
    img: "research/ffeat_before.jpg",
    video: null,
    hoverImg: "research/ffeat_after.jpg",
    authors: ["Daniel Berjón", "Rafael Pagés", "Francisco Morán"],
    venue: "International Conference on Image Processing Theory, Tools and Applications (IPTA)",
    year: 2016,
    highlight: false,
    links: [],
    description: "We propose a technique based on epipolar geometry restrictions to significantly cut down on processing time and an efficient implementation thereof on a GPU."
  },
  {
    id: "ssmv",
    title: "Seamless, Static Multi-Texturing of 3D Meshes",
    url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.12508",
    img: "research/ssmv.jpg",
    video: "research/ssmv.mp4",
    hoverImg: null,
    authors: ["Rafael Pagés", "Daniel Berjón", "Francisco Morán", "Narciso García"],
    venue: "Computer Graphics Forum, Volume 34",
    year: 2015,
    highlight: true,
    links: [
      { label: "code", url: "https://github.com/rafapages/SSMVtex" }
    ],
    description: "We present a static multi-texturing system yielding a seamless texture atlas calculated by combining the colour information from several photos from the same subject covering most of its surface."
  },
  {
    id: "splash",
    title: "SPLASH: a Hybrid 3D Modeling/Rendering Approach Mixing Splats and Meshes",
    url: "https://dl.acm.org/doi/abs/10.1145/2775292.2775320",
    img: "research/splash.jpg",
    video: "research/splash_after.mp4",
    hoverImg: null,
    authors: ["Rafael Pagés", "Sergio García", "Daniel Berjón", "Francisco Morán"],
    venue: "Web3D",
    year: 2015,
    highlight: false,
    links: [],
    description: "We propose a hybrid 3D modeling and rendering approach called SPLASH to combine the modeling flexibility and robustness of SPLAts together with the rendering simplicity and maturity of meSHes."
  },
  {
    id: "splats",
    title: "Textured splat-based point clouds for rendering in handheld devices",
    url: "https://dl.acm.org/doi/abs/10.1145/2775292.2782779",
    img: "research/splats.jpg",
    video: "research/splats.mp4",
    hoverImg: null,
    authors: ["Sergio García", "Rafael Pagés", "Daniel Berjón", "Francisco Morán"],
    venue: "Web3D",
    year: 2015,
    highlight: false,
    links: [],
    description: "We propose a novel technique for modeling and rendering a 3D point cloud obtained from a set of photographs of a real 3D scene as a set of textured elliptical splats."
  },
  {
    id: "humans",
    title: "Automatic system for virtual human reconstruction with 3D mesh multi-texturing and facial enhancement",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0923596513000957",
    img: "research/humans.jpg",
    video: "research/humans.mp4",
    hoverImg: null,
    authors: ["Rafael Pagés", "Daniel Berjón", "Francisco Morán"],
    venue: "Signal Processing: Image Communication, Volume 28",
    year: 2013,
    highlight: true,
    links: [],
    description: "We present a fully automatic low-cost system for generating animatable and statically multi-textured avatars of real people captured with several standard cameras."
  },
  {
    id: "facemerge",
    title: "3D facial merging for virtual human reconstruction",
    url: "https://ieeexplore.ieee.org/abstract/document/6365448",
    img: "research/facemerge.jpg",
    video: "research/facemerge.mp4",
    hoverImg: null,
    authors: ["Rafael Pagés", "Daniel Berjón", "Francisco Morán"],
    venue: "3DTV Conference",
    year: 2012,
    highlight: false,
    links: [],
    description: "A technique to merge a VH-based 3D mesh of a reconstructed humanoid and the depth data of its face, captured by a single structured light projector."
  },
  {
    id: "refined",
    title: "Refined facial disparity maps for automatic creation of 3D avatars",
    url: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/8290/82900J/Refined-facial-disparity-maps-for-automatic-creation-of-3D-avatars/10.1117/12.908259.short?SSO=1",
    img: "research/refined.jpg",
    video: "research/refined.mp4",
    hoverImg: null,
    authors: ["Rafael Pagés", "Francisco Morán", "Luis Salgado", "Daniel Berjón"],
    venue: "IS&T/SPIE Electronic Imaging",
    year: 2012,
    highlight: false,
    links: [],
    description: "We propose a new method to automatically refine a facial disparity map obtained with standard cameras and under conventional illumination conditions by using a smart combination of traditional computer vision and 3D graphics techniques."
  },
  {
    id: "resol",
    title: "Multi-resolution texture coding for multi-resolution 3D meshes",
    url: "https://ieeexplore.ieee.org/abstract/document/6116055",
    img: "research/resol.jpg",
    video: "research/resol_after.mp4",
    hoverImg: null,
    authors: ["David Fuentes", "Rafael Pagés", "Francisco Morán"],
    venue: "VCIP",
    year: 2011,
    highlight: false,
    links: [],
    description: "We present an innovative system to encode and transmit textured multi-resolution 3D meshes in a progressive way, with no need to send several texture images, one for each mesh LOD."
  },
  {
    id: "facelift",
    title: "Face lift surgery for reconstructed virtual humans",
    url: "https://ieeexplore.ieee.org/abstract/document/6079374",
    img: "research/facelift.jpg",
    video: "research/facelift.mp4",
    hoverImg: null,
    authors: ["Rafael Pagés", "Sergio Arnaldo", "Francisco Morán"],
    venue: "International Conference on Cyberworlds",
    year: 2011,
    highlight: false,
    links: [
      { label: "code", url: "https://github.com/rafapages/face-morpher" }
    ],
    description: "We introduce an innovative, semi-automatic method to transform low resolution facial meshes into high definition ones, based on the tailoring of a generic, neutral human head model."
  },
  {
    id: "item",
    title: "ITEM: inter-texture error measurement for 3D meshes",
    url: "https://dl.acm.org/doi/abs/10.1145/2010425.2010431",
    img: "research/item.jpg",
    video: "research/item.mp4",
    hoverImg: null,
    authors: ["Rafael Pagés", "David Fuentes", "Francisco Morán"],
    venue: "Web3D",
    year: 2011,
    highlight: false,
    links: [],
    description: "We introduce a simple and innovative method to compare any two texture maps, regardless of their sizes, aspect ratios, or even masks, as long as they are both meant to be mapped onto the same 3D mesh."
  },
  {
    id: "composition",
    title: "Composition of Texture Atlases for 3D Mesh Multi-texturing",
    url: "https://diglib.eg.org/handle/10.2312/LocalChapterEvents.ItalChap.ItalianChapConf2010.123-128",
    img: "research/composition.jpg",
    video: "research/composition.mp4",
    hoverImg: null,
    authors: ["Rafael Pagés", "Sergio Arnaldo", "Francisco Morán"],
    venue: "Eurographics",
    year: 2010,
    highlight: false,
    links: [],
    description: "We introduce an automatic technique for mapping onto a 3D triangle mesh a high resolution texture synthesized from several pictures taken by standard cameras surrounding the object."
  }
];

const PATENTS = [
  {
    id: "patent_voli",
    title: "Volumetric Imaging",
    url: "https://patents.google.com/patent/US20220245885A1/en",
    img: "research/p3.jpg",
    video: null,
    hoverImg: null,
    authors: ["Rafael Pagés", "Jan Ondrej", "Konstantinos Amplianitis", "Sergio Arnaldo", "Valeria Olyunina"],
    venue: "US12026823B2 · EP Application EP21154369.9",
    year: null,
    highlight: false,
    links: [],
    description: "A method for generating a moving volumetric image of a moving object from data recorded by a user-held device comprising: acquiring, from the user-held device, video and depth data of the moving object, and pose data; and communicating the acquired data to a computing module."
  },
  {
    id: "patent_3d",
    title: "Method and apparatus for generating a three-dimensional model",
    url: "https://patents.google.com/patent/US11348267B2/en",
    img: "research/p1.jpg",
    video: null,
    hoverImg: null,
    authors: ["Rafael Pagés", "Konstantinos Amplianitis", "David Monaghan", "Jan Ondrej", "Aljosa Smolic"],
    venue: "US20200320727B2 · EP Application PCT/EP2018/086331",
    year: null,
    highlight: false,
    links: [],
    description: "A method comprising providing a plurality of images of a scene captured by a plurality of image capturing devices."
  },
  {
    id: "patent_real",
    title: "A method and a system for generating a realistic 3D reconstruction model for an object or being",
    url: "https://patents.google.com/patent/EP2852932A1/en",
    img: "research/p2.jpg",
    video: null,
    hoverImg: null,
    authors: ["Rafael Pagés", "Daniel Berjón", "Sergio Arnaldo", "Francisco Morán", "Tomas Montserrat Mora", "Julien Quelen", "Oscar Divorra Escoda", "Christian Ferran Bernstrom"],
    venue: "US20150178988A1 · EP2852932A1 · WO2013174671A1",
    year: null,
    highlight: false,
    links: [],
    description: "A method for generating a realistic 3D reconstruction model for an object or being."
  }
];
