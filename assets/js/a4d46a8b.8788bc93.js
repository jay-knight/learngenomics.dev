"use strict";(self.webpackChunklearngenomics_dev=self.webpackChunklearngenomics_dev||[]).push([[788],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(t),m=a,g=f["".concat(c,".").concat(m)]||f[m]||l[m]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7855:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={title:"Read Mapping",track:"Next-Generation Sequencing"},c=void 0,p={unversionedId:"next-generation-sequencing/read-mapping",id:"next-generation-sequencing/read-mapping",title:"Read Mapping",description:'During the next generation sequencing portion of our workflow, it\'s as if a box of puzzle pieces were dumped out. During the next step of read mapping, the puzzle is put back together. As it is helpful to reference what the puzzle should look like, in genomics the analogous photo is a "reference genome".',source:"@site/docs/03-next-generation-sequencing/03-read-mapping.md",sourceDirName:"03-next-generation-sequencing",slug:"/next-generation-sequencing/read-mapping",permalink:"/docs/next-generation-sequencing/read-mapping",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-next-generation-sequencing/03-read-mapping.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Read Mapping",track:"Next-Generation Sequencing"},sidebar:"tutorialSidebar",previous:{title:"Next-Generation Sequencing",permalink:"/docs/next-generation-sequencing/next-generation-sequencing"},next:{title:"Genomic File Formats",permalink:"/docs/genomic-file-formats/"}},u={},l=[],f={toc:l};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"During the next generation sequencing portion of our workflow, it's as if a box of puzzle pieces were dumped out. During the next step of ",(0,o.kt)("strong",{parentName:"p"},"read mapping"),', the puzzle is put back together. As it is helpful to reference what the puzzle should look like, in genomics the analogous photo is a "reference genome".'),(0,o.kt)("p",null,'The reference genome can be conceptualized as the genetic sequence of an "average" human, which of course, an "average" human does not really exist. Computed by looking for the most common alleles at each position from individuals across a wide variety of geographic and ethnic backgrounds, the reference genome is maintained by the\xa0',(0,o.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/grc"},"Genome Reference Consortium"),". As more is learned about the composition of the human genome, the reference implementation that is used evolves. At the time of writing, the most up-to-date reference genome for Homo Sapiens is\xa0GRCh38, released in 2013."),(0,o.kt)("p",null,"As an implementation note, the entire analysis is based off of the reference genome used. Generally speaking, analyses that use two different reference genomes are not compatible because the positions of genes and other important biomarkers are updated with each genome build. Once an end-to-end analysis pipeline is decided on, it is a significant task to update analysis pipelines to a new reference genome. As such, many labs are still using the\xa0GRCh37\xa0version of the human genome, which was released in 2009."),(0,o.kt)("p",null,"Once a reference genome is decided, the next step is to choose a mapping software (frequently referred to as a mapper or aligner) to align the reads. The mapping software generates a special data structure from a reference genome and then goes through each read pair in the FASTQ files to see if and where they fit in the reference genome. At the time of writing, the most popular aligner for each type of data is\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lh3/bwa"},"BWA")," for DNA sequencing and\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alexdobin/STAR"},"STAR"),' for RNA sequencing. Each program provides many parameters that can be tweaked depending on the characteristics of the data to achieve the "best" alignment. Once the alignment program has completed, it creates a\xa0',(0,o.kt)("a",{parentName:"p",href:"https://samtools.github.io/hts-specs/SAMv1.pdf"},"SAM/BAM"),'\xa0file containing all of the read pairs, where the aligner believes they live in the reference genome (if anywhere), and many other fields that the aligner computes. This file is widely considered the basis of most modern computational genomic analyses. The specifics of each file type are discussed in the next chapter "Genomic File Formats."'))}m.isMDXComponent=!0}}]);