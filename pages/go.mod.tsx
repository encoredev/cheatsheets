import Head from 'next/head'
import { FC } from 'react'

const GoModGuide: FC = () => {
  const hl = (child: any) => <span className="hl">{child}</span>
  return <>
    <Head>
      <title>Go Modules Cheat Sheet</title>
      <meta name="twitter:title" content="Go Modules Cheat Sheet • Encore" />
      <meta name="twitter:description" content="The most common Go modules concepts to remember." />
      <meta name="description" content="The most common Go modules concepts to remember." />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&family=Work+Sans:wght@700&display=swap" rel="stylesheet" />
    </Head>

    <style>{`
      header {
        background-image: linear-gradient(to top right, #1BAAD1, #01A79C);
      }
      h1, h2, h3 { font-family: 'Work Sans', sans-serif; }
      h2, h3 { color: #00ACD7; }
      code { font-weight: bold; }
      .hl { color: #CF3063; }
    `}
    </style>

    <div className="min-h-screen w-full bg-gray-200 flex justify-center items-center sm:p-4">
      <div className="w-full bg-white sm:rounded-lg max-w-screen-lg">
        <header className="lg:h-28 sm:rounded-t-lg text-white relative p-2">
          <div className="flex items-center justify-center gap-4">
            <svg className="h-8 lg:h-20 w-auto" fill="currentColor" viewBox="0 0 205.32 76.66">
              <path d="M15.41,23.1c-.37,0-.48-.24-.26-.53l2.09-2.66a1.58,1.58,0,0,1,1.09-.53l35.74,0c.37,0,.5.26.3.57l-1.66,2.59a1.4,1.4,0,0,1-1,.57Z"/>
              <path d="M.37,32.3c-.37,0-.48-.24-.25-.53L2.21,29.1a1.54,1.54,0,0,1,1.08-.53l45.64,0a.46.46,0,0,1,.46.64l-.81,2.45a1,1,0,0,1-.88.63Z"/>
              <path d="M24.6,41.47c-.37,0-.52-.26-.34-.58l1.42-2.55a1.28,1.28,0,0,1,1-.59l20,0a.6.6,0,0,1,.61.67l-.23,2.39a.75.75,0,0,1-.73.67Z"/>
              <path d="M128.38,21.33c-6.28,1.56-10.59,2.85-16.77,4.4-1.53.38-1.64.53-2.93-1A13.07,13.07,0,0,0,104,21c-6.3-3.1-12.41-2.24-18,1.46a21.4,21.4,0,0,0-10.23,19A15.71,15.71,0,0,0,89.22,57.2c6.76.94,12.48-1.49,17-6.57,1-1.06,1.72-2.28,2.74-3.66H89.71c-2.09,0-2.57-1.28-1.86-3,1.26-3.06,3.7-8.34,5.1-10.92a2.74,2.74,0,0,1,2.45-1.64h36.42c-.17,2.71-.17,5.44-.56,8.1a42.47,42.47,0,0,1-8.21,19.65c-7.17,9.5-16.56,15.41-28.46,17-9.78,1.28-18.88-.63-26.85-6.65A31.5,31.5,0,0,1,55,47.3C53.71,36.37,56.89,26.64,63.49,18A44.25,44.25,0,0,1,91.5.73C100.88-1,109.86.17,118,5.59a31.67,31.67,0,0,1,11.58,14.14C129.92,20.56,129.51,21.06,128.38,21.33Z"/>
              <path d="M161.42,76.66c-9.15-.17-17.41-2.8-24.36-8.8a31.34,31.34,0,0,1-10.8-19.31c-1.79-11.28,1.33-21.29,8.15-30.21,7.31-9.58,16.12-14.61,28-16.73,10.18-1.82,19.8-.77,28.47,5.15,7.92,5.41,12.84,12.69,14.08,22.27,1.74,13.45-2.21,24.48-11.51,33.92a45.26,45.26,0,0,1-24,12.78C166.79,76.25,164.09,76.36,161.42,76.66Zm23.86-40.43c-.11-1.3-.11-2.33-.29-3.32-1.78-9.89-10.88-15.46-20.41-13.33-9.35,2.08-15.31,8-17.48,17.38a16.47,16.47,0,0,0,9.17,18.88,18.28,18.28,0,0,0,16.32-.61C180.45,51.25,184.76,44.83,185.28,36.23Z"/>
            </svg>
            <h1 className="text-xl lg:text-5l">Go modules cheat sheet</h1>
          </div>
          <footer className="text-right lg:absolute bottom-2 right-2 print:right-8 text-xs">by <a href="https://twitter.com/_eandre" target="_blank" rel="nofollow" className="hover:underline">@_eandre</a></footer>
        </header>

        <div className="p-2 lg:p-8 text-sm lg:text-base max-w-screen-lg overflow-auto">
          <section>
            <h2 className="text-xl lg:text-4xl mb-6">Quick start</h2>
            <pre className="font-mono leading-none">

              <div className="text-gray-400"># Dependency Management</div>
              <div className="text-gray-400 block sm:hidden mt-3"># add or upgrade dep</div>
              go get -d github.com/path/to/module       <span className="text-gray-400 hidden sm:inline"># add or upgrade dep</span><br />
              <div className="text-gray-400 block sm:hidden"># use specific version</div>
              go get -d github.com/dep/two/v2{hl("@v2.1.0")}    <span className="text-gray-400 hidden sm:inline"># use specific version</span><br />
              <div className="text-gray-400 block sm:hidden"># use specific branch</div>
              go get -d github.com/dep/commit{hl("@branch")}    <span className="text-gray-400 hidden sm:inline"># use specific branch</span><br />
              <div className="text-gray-400 block sm:hidden"># upgrade all modules used in subdirs</div>
              go get -d -u ./...                        <span className="text-gray-400 hidden sm:inline"># upgrade all modules used in subdirs</span><br /><br />

              <div className="text-gray-400 block sm:hidden"># remove dep</div>
              go get -d github.com/dep/legacy{hl("@none")}      <span className="text-gray-400 hidden sm:inline"># remove dep</span><br /><br />

              <div className="text-gray-400 mt-3 sm:mt-0"># Useful commands</div>
              <div className="text-gray-400 block sm:hidden mt-3"># organize and clean up go.mod and go.sum</div>
              go mod tidy                               <span className="text-gray-400 hidden sm:inline"># organize and clean up go.mod and go.sum</span><br />
              <div className="text-gray-400 block sm:hidden mt-3"># download deps into module cache</div>
              go mod download                           <span className="text-gray-400 hidden sm:inline"># download deps into module cache</span><br />
              <div className="text-gray-400 block sm:hidden mt-3"># initialize new module</div>
              go mod init github.com/path/to/module     <span className="text-gray-400 hidden sm:inline"># initialize new module</span><br />
              <div className="text-gray-400 block sm:hidden mt-3"># why is the module a dependency?</div>
              go mod why -m github.com/path/to/module   <span className="text-gray-400 hidden sm:inline"># why is the module a dependency?</span><br />
              <div className="text-gray-400 block sm:hidden mt-3"># build and install a binary</div>
              go install github.com/path/to/bin{hl("@latest")}  <span className="text-gray-400 hidden sm:inline"># build and install a binary</span>
            </pre>
          </section>

          <section className="mt-6 lg:mt-10">
            <h2 className="text-xl lg:text-4xl mb-6">Anatomy of go.mod</h2>
            <Anatomy />
          </section>

          <section className="mt-6 lg:mt-10">
            <h2 className="text-xl lg:text-4xl mb-6">Minimal Version Selection (MVS)</h2>
            <div className="flex flex-col gap-y-4">
              <p>To build a program Go needs to know exactly which dependencies you need, and which version to use.</p>
              <p>Go uses MVS as a predictable and simple way to decide which version to use.</p>
              <p>It works like this:</p>
              <ol className="list-inside list-decimal pl-4">
                <li>The module you’re running from is the “main module”</li>
                <li>Find all dependencies the main module needs (recursively, using the dependencies’ <code>go.mod</code> files)</li>
                <li>For each dependency, use the greatest version that any <code>go.mod</code> explicitly specified</li>
              </ol>
            </div>
            <h3 className="text-2xl mt-6 mb-4">Example</h3>
            <div className="flex flex-col lg:flex-row gap-4 text-sm">
              <div>
                <img src="/mvs.svg" className="mx-auto h-32 lg:h-48 w-auto" />
              </div>
              <div className="flex flex-col gap-y-4">
                <p>In this example, the main module depends on <code>A 1.0</code> and <code>B 2.1</code>.</p>

                <p>Since <code>B 2.1</code> depends on <code>A 1.1</code>, this is the version of <code>A</code> that will be used.</p>

                <p>Since <code>A 1.1</code> is used, it also pulls in <code>C 1.1</code>.</p>

                <p>The final dependency list is:
                  <ul className="list-inside list-disc">
                    <li><code>A 1.1</code></li>
                    <li><code>B 2.1</code></li>
                    <li><code>C 1.1</code></li>
                  </ul>
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="text-center py-2 text-xs">
          <div>&copy; 2021 André Eriksson &mdash; <a className="text-indigo-600 hover:text-indigo-400" href="https://encore.dev" target="_blank">encore.dev</a></div>
          <div>Contributions welcome at <a className="text-indigo-600 hover:text-indigo-400" href="https://github.com/encoredev/cheatsheets" rel="nofollow" target="_blank">https://github.com/encoredev/cheatsheets</a> (MIT License)</div>
        </div>
      </div>
    </div>
  </>
}

const Anatomy: FC = (props) => {
  return (
    <svg className="w-full h-auto" viewBox="0 0 781.04 387.45">
      <defs>
        <style>{`
          .cls-1 {
            fill: #cf3063;
          }

          .cls-2 {
            fill: #24a091;
          }

          .cls-3, .cls-5 {
            fill: none;
            stroke-miterlimit: 10;
          }

          .cls-3 {
            stroke: #D1D5DB;
            stroke-width: 1.3px;
          }

          .cls-4 {
            fill: #D1D5DB;
          }

          .cls-5 {
            stroke: #000;
            stroke-width: 3px;
          }

          .code {
            font-size: 17px;
            letter-spacing: 0.029em;
            font-family: 'Source Code Pro', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            white-space: pre;
          }

          .note {
            font-size: 12px;
            font-family: 'Inter var', sans-serif;
            font-weight: 300;
            fill: #24A091;
          }
          .hl { fill: #CF3063; }
        `}</style>
      </defs>
      <g transform="translate(18.4 24.5)">
        <text x="0" y="0" className="code">
          <tspan x="0" dy="0"     >module github.com/my/library</tspan>
          <tspan x="0" dy="2.5em" >go 1.16</tspan>
          <tspan x="0" dy="2.5em" >require (</tspan>
          <tspan x="0" dy="1.25em">    github.com/dep/one    v1.0.0</tspan>
          <tspan x="0" dy="1.25em">    github.com/dep/two<tspan className="hl">/v2</tspan> v2.3.0</tspan>
          <tspan x="0" dy="2.5em" >    github.com/dep/other <tspan className="hl">v0.0.0-20180523231146-b3f5c0f6e5f1</tspan></tspan>
          <tspan x="0" dy="1.25em">    github.com/dep/legacy <tspan className="hl">v2.0.0+incompatible</tspan></tspan>
          <tspan x="0" dy="1.25em">)</tspan>
          <tspan x="0" dy="2.5em" >exclude github.com/dep/legacy v1.9.2</tspan>
          <tspan x="0" dy="2.5em" >replace github.com/dep/one {"=>"} github.com/fork/one</tspan>
        </text>
      </g>
      
      <g transform="translate(420.9 9)">
        <text x="0" y="0" className="note">Go import path for where the module is hosted</text>
      </g>

      <g transform="translate(420.9 44.5)">
        <text x="0" y="0" className="note">
          <tspan x="0" dy="0">Go version used to develop the module</tspan>
          <tspan x="0" dy="1.25em">(to use new language features)</tspan>
        </text>
      </g>

      <g transform="translate(420.9 92.5)">
        <text x="0" y="0" className="note">v2 and later have the major version in the module path</text>
      </g>

      <g transform="translate(560.9 135)">
        <text x="0" y="0" className="note">
          <tspan x="0" dy="0">A “pseudo-version” that refers to</tspan>
          <tspan x="0" dy="1.25em">a commit and not a tagged release</tspan>
        </text>
      </g>

      <g transform="translate(553 247)">
        <text x="0" y="0" className="note">
          <tspan x="0" dy="0">“incompatible” means the package</tspan>
          <tspan x="0" dy="1.25em">hasn’t been migrated to Go modules yet</tspan>
        </text>
      </g>

      <g transform="translate(211 363.5)">
        <text x="0" y="0" className="note">Replace this module with this one</text>
      </g>

      <g transform="translate(15 355)">
        <text x="0" y="0" className="note">
          <tspan x="0" dy="0">Prevent a specific</tspan>
          <tspan x="0" dy="1.25em">module version</tspan>
          <tspan x="0" dy="1.25em">from being used</tspan>
        </text>
      </g>
      
      <g>
        <path className="cls-3" d="M555.11,139.9c-9.77-1.25-33.79-3-59.24,10a99.8,99.8,0,0,0-29.63,23.15" transform="translate(-1.35 -1.23)"/>
        <polygon className="cls-4" points="464.34 168.94 465.48 171.3 467.96 172.12 462.38 174.82 464.34 168.94"/>
      </g>
      
      <g>
        <path className="cls-3" d="M551.1,258.39a169.55,169.55,0,0,1-49.21-3,171.77,171.77,0,0,1-66.19-29.8" transform="translate(-1.35 -1.23)"/>
        <polygon className="cls-4" points="437.27 223.48 435.02 224.8 434.41 227.34 431.25 222.01 437.27 223.48"/>
      </g>
      
      <g>
        <path className="cls-3" d="M13.5,352.5c-2.42-4.36-15.4-19.05-9.67-40.89a57.72,57.72,0,0,1,11.49-22.2" transform="translate(-1.73 -1.23)"/>
        <polygon className="cls-4" points="14.24 291.17 13.09 288.82 10.6 288.02 16.15 285.28 14.24 291.17"/>
      </g>
      
      <g>
        <path className="cls-3" d="M417.54,89.69c-10.2-2.18-76.33-15.33-117.48,25.11a91.74,91.74,0,0,0-15.2,19.7" transform="translate(-1.35 -1.23)"/>
        <polygon className="cls-4" points="282.42 130.52 283.99 132.61 286.58 132.94 281.63 136.66 282.42 130.52"/>
      </g>
      <g>
        <path className="cls-3" d="M416.54,48.52c-69.36-2-143.54-1.14-221.92,4q-46,3-89.53,7.63" transform="translate(-1.35 -1.23)"/>
        <polygon className="cls-4" points="105.33 56.4 104.54 58.89 105.79 61.19 99.88 59.34 105.33 56.4"/>
      </g>
      <g>
        <path className="cls-3" d="M418.55,6.35a146.42,146.42,0,0,0-94.89,8.42" transform="translate(-1.35 -1.23)"/>
        <polygon className="cls-4" points="323.07 10.68 323.09 13.3 324.98 15.1 318.79 15.16 323.07 10.68"/>
      </g>
      <path className="cls-5" d="M750.92,221.24" transform="translate(-1.35 -1.23)"/>
      <path className="cls-5" d="M536,285.5" transform="translate(-1.35 -1.23)"/>
      <g>
        <line className="cls-3" x1="263.43" y1="352.56" x2="254.26" y2="335.87"/>
        <polygon className="cls-4" points="257.25 336.31 254.64 336.58 253.03 338.63 252.39 332.47 257.25 336.31"/>
      </g>
      <g>
        <line className="cls-3" x1="366.86" y1="352.56" x2="376.04" y2="335.87"/>
        <polygon className="cls-4" points="377.27 338.63 375.65 336.58 373.05 336.31 377.91 332.47 377.27 338.63"/>
      </g>
      <path className="cls-5" d="M138.39,405" transform="translate(-1.35 -1.23)"/>
    </svg>
  )
}

export default GoModGuide