import React, { useState } from 'react'
import PDFViewer from 'index'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import CustomNavigation from './Navigation'
import sources from './Sources'

import './App.css'

let maxPage = 0
let minScale = 0.5
let maxScale = 3

const FromUrl = () => (
    <div className='col-sm-12 text-center' id='url'>
        <h1 className='text-white bg-info rounded'>
            <a href='#url' className='text-reset text-decoration-none'>
                Fetch PDF by URL
            </a>
        </h1>
        <div className='border rounded'>
            <PDFViewer
                document={{
                    url: sources.url,
                }}
                hideNavbar={true}
                scale={2}
                // showThumbnail={{ scale: 3 }}
            />
        </div>
    </div>
)

const FromBase64 = () => (
    <div className='col-sm-12 text-center' id='base64'>
        <h1 className='text-white bg-info rounded'>
            <a href='#base64' className='text-reset text-decoration-none'>
                Load PDF from base 64 string
            </a>
        </h1>
        <div className='border rounded'>
            <PDFViewer
                document={{
                    base64: sources.base64,
                }}
            />
        </div>
    </div>
)

const ErrorHandling = () => (
    <div className='col-sm-12 text-center' id='eh'>
        <h1 className='text-white bg-info rounded'>
            <a href='#eh' className='text-reset text-decoration-none'>
                Error message for failures
            </a>
        </h1>
        <div className='border rounded'>
            <PDFViewer
                document={{
                    url: 'https://somewrongurl/tsjydyd.pdf',
                }}
            />
        </div>
    </div>
)

const CustomErrorHandling = () => (
    <div className='col-sm-12 text-center' id='ceh'>
        <h1 className='text-white bg-info rounded'>
            <a href='#ceh' className='text-reset text-decoration-none'>
                Custom Error component for failures
            </a>
        </h1>
        <div className='border rounded'>
            <PDFViewer
                document={{
                    url: 'https://somewrongurl/tsjydyd.pdf',
                }}
                alert={err => (
                    <div
                        style={{
                            color: '#fa5b35',
                            backgroundColor: '#0c0c0c',
                        }}>
                        <h3 style={{ fontWeight: 'bolder' }}>
                            Failed To load !!!
                        </h3>
                        <h6>{err.message}</h6>
                    </div>
                )}
            />
        </div>
    </div>
)

const WithCustomLoader = () => (
    <div className='col-sm-12 text-center' id='cl'>
        <h1 className='text-white bg-info rounded'>
            <a href='#cl' className='text-reset text-decoration-none'>
                Custom loader element
            </a>
        </h1>

        <div className='border rounded'>
            <PDFViewer
                document={{
                    url: sources.url,
                }}
                loader={
                    <h2 style={{ color: '#fa5b35' }}>Custom loader element</h2>
                }
            />
        </div>
    </div>
)

const WithCustomStartingPage = () => (
    <div className='col-sm-12 text-center' id='csp'>
        <h1 className='text-white bg-info rounded'>
            <a href='#csp' className='text-reset text-decoration-none'>
                Custom starting page
            </a>
        </h1>
        <div className='border rounded'>
            <PDFViewer
                document={{
                    url: sources.url,
                }}
                page={5}
            />
        </div>
    </div>
)

const WithCustomScale = () => (
    <div className='col-sm-12 text-center' id='cs'>
        <h1 className='text-white bg-info rounded'>
            <a href='#cs' className='text-reset text-decoration-none'>
                Custom scale
            </a>
        </h1>
        <div className='border rounded'>
            <PDFViewer
                document={{
                    url: sources.url,
                }}
                scale={2}
                scaleStep={0.5}
                maxScale={5}
                minScale={0.5}
            />
        </div>
    </div>
)

const WithCustomNavigationStyles = () => (
    <div className='col-sm-12 text-center' id='cns'>
        <h1 className='text-white bg-info rounded'>
            <a href='#cns' className='text-reset text-decoration-none'>
                Custom css classes
            </a>
        </h1>
        <div className='border rounded'>
            <PDFViewer
                document={{
                    url: sources.url,
                }}
                css='customViewer'
                canvasCss='customCanvas'
                navigation={{
                    css: {
                        navbarWrapper: 'customWrapper',
                        zoomOutBtn: 'customPrevBtn',
                        resetZoomBtn: 'customResetBtn',
                        zoomInBtn: 'customNextBtn',
                        previousPageBtn: 'customPrevBtn',
                        pageIndicator: 'customPages',
                        nextPageBtn: 'customNextBtn',
                        rotateLeftBtn: 'customPrevBtn',
                        resetRotationBtn: 'customResetBtn',
                        rotateRightBtn: 'customNextBtn',
                    },
                }}
            />
        </div>
    </div>
)

const WithCustomNavigation = () => (
    <div className='col-sm-12 text-center' id='cn'>
        <h1 className='text-white bg-info rounded'>
            <a href='#cn' className='text-reset text-decoration-none'>
                Custom navigation
            </a>
        </h1>
        <div className='border rounded'>
            <PDFViewer
                document={{
                    url: sources.url,
                }}
                css='customViewer'
                navigation={CustomNavigation}
            />
        </div>
    </div>
)

const WithOnDocumentClick = () => (
    <div className='col-sm-12 text-center' id='odc'>
        <h1 className='text-white bg-info rounded'>
            <a href='#odc' className='text-reset text-decoration-none'>
                With onDocumentClick, onPrevBtnClick, onNextBtnClick, onZoom and
                onRotation handler
            </a>
        </h1>
        <div className='border rounded'>
            <PDFViewer
                document={{
                    url: sources.url,
                }}
                onDocumentClick={() => alert('Document was clicked')}
                onPrevBtnClick={page => alert(`Page ${page} selected`)}
                onNextBtnClick={page => alert(`Page ${page} selected`)}
                onZoom={scale => alert(`Zoom scale is ${scale}`)}
                onRotation={angle => alert(`Page angle is ${angle}`)}
            />
        </div>
    </div>
)

const WithoutNavigation = () => (
    <div className='col-sm-12 text-center' id='wn'>
        <h1 className='text-white bg-info rounded'>
            <a href='#wn' className='text-reset text-decoration-none'>
                Without Navigation
            </a>
        </h1>
        <div className='border rounded'>
            <PDFViewer
                document={{
                    url: sources.url,
                }}
                hideNavbar
            />
        </div>
    </div>
)

const WithoutZoomRotation = () => (
    <div className='col-sm-12 text-center' id='wzr'>
        <h1 className='text-white bg-info rounded'>
            <a href='#wzr' className='text-reset text-decoration-none'>
                Without Zoom and Rotation
            </a>
        </h1>
        <div className='border rounded'>
            <PDFViewer
                document={{
                    url: sources.url,
                }}
                hideZoom
                hideRotation
            />
        </div>
    </div>
)

const WithNavbarTop = () => (
    <div className='col-sm-12 text-center' id='nt'>
        <h1 className='text-white bg-info rounded'>
            <a href='#nt' className='text-reset text-decoration-none'>
                Navigation Bar on top
            </a>
        </h1>
        <div className='border rounded'>
            <PDFViewer
                document={{
                    url: sources.url,
                }}
                navbarOnTop
            />
        </div>
    </div>
)

const WithWatermark = () => (
    <div className='col-sm-12 text-center' id='wp'>
        <h1 className='text-white bg-info rounded'>
            <a href='#wp' className='text-reset text-decoration-none'>
                Watermark and Protected
            </a>
        </h1>
        <div className='border rounded'>
            <PDFViewer
                document={{
                    url: sources.url,
                }}
                protectContent
                watermark={{
                    text: 'WaterMark Demo !!!',
                    diagonal: true,
                    opacity: '0.5',
                    font: 'Comfortaa',
                    size: '72',
                    color: '#FF5733',
                }}
            />
        </div>
    </div>
)

const WithExternalControl = () => {
    let [doc, setDoc] = useState({
        url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
    })
    let [pageNo, setPageNo] = useState(1)
    let [scale, setScale] = useState(0.5)
    let [rotation, setRotation] = useState(0)

    return (
        <div className='col-sm-12 text-center' id='ec'>
            <h1 className='text-white bg-info rounded'>
                <a href='#ec' className='text-reset text-decoration-none'>
                    External Controls
                </a>
            </h1>
            <div className='border rounded'>
                <div className='container'>
                    <PDFViewer
                        document={doc}
                        canvasCss='customCanvasCss'
                        externalInput
                        scale={scale}
                        minScale={minScale}
                        maxScale={maxScale}
                        page={pageNo}
                        rotationAngle={rotation}
                        getMaxPageCount={pageCount => (maxPage = pageCount)}
                    />
                    <div className='row mt-5'>
                        <div className='col-md-4'>
                            <div
                                className='btn-toolbar mb-3'
                                role='toolbar'
                                aria-label='Toolbar with button groups'>
                                <div
                                    className='btn-group mr-2'
                                    role='group'
                                    aria-label='First group'>
                                    <button
                                        type='button'
                                        className='btn btn-secondary'
                                        onClick={() => {
                                            if (pageNo > 1) {
                                                setPageNo(pageNo - 1)
                                            }
                                        }}>
                                        &lt;&lt;
                                    </button>
                                    <div className='input-group'>
                                        <div className='input-group-prepend'>
                                            <div
                                                className='input-group-text text-info'
                                                id='btnGroupAddon'>
                                                Page Number is {pageNo}
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type='button'
                                        className='btn btn-secondary'
                                        onClick={() => {
                                            if (pageNo < maxPage) {
                                                setPageNo(pageNo + 1)
                                            }
                                        }}>
                                        &gt;&gt;
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div
                                className='btn-toolbar mb-3'
                                role='toolbar'
                                aria-label='Toolbar with button groups'>
                                <div
                                    className='btn-group mr-2'
                                    role='group'
                                    aria-label='First group'>
                                    <button
                                        type='button'
                                        className='btn btn-secondary'
                                        onClick={() => {
                                            if (scale < maxScale) {
                                                setScale(scale + 0.5)
                                            }
                                        }}>
                                        +
                                    </button>
                                    <div className='input-group'>
                                        <div className='input-group-prepend'>
                                            <div
                                                className='input-group-text text-info'
                                                id='btnGroupAddon'>
                                                Scale is {scale}
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type='button'
                                        className='btn btn-secondary'
                                        onClick={() => {
                                            if (scale > minScale) {
                                                setScale(scale - 0.5)
                                            }
                                        }}>
                                        -
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div
                                className='btn-toolbar mb-3'
                                role='toolbar'
                                aria-label='Toolbar with button groups'>
                                <div
                                    className='btn-group mr-2'
                                    role='group'
                                    aria-label='First group'>
                                    <button
                                        type='button'
                                        className='btn btn-secondary'
                                        onClick={() => {
                                            if (rotation > -90) {
                                                setRotation(rotation - 90)
                                            }
                                        }}>
                                        &lt;==
                                    </button>
                                    <div className='input-group'>
                                        <div className='input-group-prepend'>
                                            <div
                                                className='input-group-text text-info'
                                                id='btnGroupAddon'>
                                                Rotation Angle is {rotation}
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type='button'
                                        className='btn btn-secondary'
                                        onClick={() => {
                                            if (rotation < 90) {
                                                setRotation(rotation + 90)
                                            }
                                        }}>
                                        ==&gt;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <button
                                type='button'
                                className='btn btn-primary'
                                onClick={() => {
                                    setDoc({
                                        url: sources.url,
                                    })
                                    setPageNo(1)
                                    setScale(0.5)
                                    setRotation(0)
                                }}>
                                View Document 1
                            </button>
                        </div>
                        <div className='col-md-6'>
                            <button
                                type='button'
                                className='btn btn-primary'
                                onClick={() => {
                                    setDoc({
                                        base64: sources.base64,
                                    })
                                    setPageNo(1)
                                    setScale(0.5)
                                    setRotation(0)
                                }}>
                                View Document 2
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function App() {
    return (
        <div className='container'>
            <div className='row my-5'>
                <FromUrl />
            </div>
            {/*<div className='row my-5'>*/}
            {/*    <FromBase64 />*/}
            {/*</div>*/}
            {/*<div className='row my-5'>*/}
            {/*    <ErrorHandling />*/}
            {/*</div>*/}
            {/*<div className='row my-5'>*/}
            {/*    <CustomErrorHandling />*/}
            {/*</div>*/}
            {/*<div className='row my-5'>*/}
            {/*    <WithCustomLoader />*/}
            {/*</div>*/}
            {/*<div className='row my-5'>*/}
            {/*    <WithCustomStartingPage />*/}
            {/*</div>*/}
            {/*<div className='row my-5'>*/}
            {/*    <WithCustomScale />*/}
            {/*</div>*/}
            {/*<div className='row my-5'>*/}
            {/*    <WithCustomNavigationStyles />*/}
            {/*</div>*/}
            {/*<div className='row my-5'>*/}
            {/*    <WithCustomNavigation />*/}
            {/*</div>*/}
            {/*<div className='row my-5'>*/}
            {/*    <WithOnDocumentClick />*/}
            {/*</div>*/}
            {/*<div className='row my-5'>*/}
            {/*    <WithoutNavigation />*/}
            {/*</div>*/}
            {/*<div className='row my-5'>*/}
            {/*    <WithoutZoomRotation />*/}
            {/*</div>*/}
            {/*<div className='row my-5'>*/}
            {/*    <WithNavbarTop />*/}
            {/*</div>*/}
            {/*<div className='row my-5'>*/}
            {/*    <WithWatermark />*/}
            {/*</div>*/}
            {/*<div className='row my-5'>*/}
            {/*    <WithExternalControl />*/}
            {/*</div>*/}
        </div>
    )
}

export default App
