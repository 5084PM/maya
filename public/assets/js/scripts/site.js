export default {
    styles: {},
    states: {
        s_auth_required: {
            id: 's_auth_required',
            _entity: 'State',
            name: 'auth_required',
            slug: 'auth_required',
            selector: '.auth_required',
            props: {}
        },
        s_login: {
            id: 's_login',
            _entity: 'State',
            name: 'login',
            slug: 'login',
            selector: '.login',
            props: {}
        },
        s_signup: {
            id: 's_signup',
            _entity: 'State',
            name: 'signup',
            slug: 'signup',
            selector: '.signup',
            props: {}
        },
        s_error: {
            id: 's_error',
            _entity: 'State',
            name: 'error',
            slug: 'error',
            selector: '.error',
            props: {}
        },
        s_loading: {
            id: 's_loading',
            _entity: 'State',
            name: 'loading',
            slug: 'loading',
            selector: '.loading',
            props: {}
        },
        s_auth: {
            id: 's_auth',
            _entity: 'State',
            name: 'auth',
            slug: 'auth',
            selector: '.auth',
            props: {}
        }
    },
    objects: {},
    templates: {
        __presets__: {
            entities: {
                __transclude__: {
                    name: 'div',
                    id: '__transclude__',
                    states: [],
                    ns: 'logic',
                    par: 'dummyrect',
                    properties: { default: {} },
                    logic: {
                        default: function (e) {
                            try {
                                return { name: 'contents' };
                            } catch (e) {
                            }
                        }
                    },
                    ctxt: !0
                }
            },
            name: 'presets',
            id: '__presets__',
            template: function (e, t = {}) {
                const {
                    h: i,
                    incl: r,
                    getContentFor: s,
                    getModifiersFor: n,
                    getScroller: a,
                    getScroll: d,
                    getProps: o,
                    getAttrs: l
                } = t;
                return i('div', { attributes: { id: 'defs' } }, [i('svg', {
                        attributes: {
                            id: 'presets',
                            width: 0,
                            height: 0
                        }
                    }, [
                        i('defs', {
                            id: 'undefined',
                            attributes: l({ class: 'undefined' }, 'undefined'),
                            _h: o('undefined')
                        }, function (e) {
                            return [];
                        }),
                        i('rect', {
                            id: 'dummyrect',
                            attributes: l({ class: 'undefined' }, 'dummyrect'),
                            _h: o('dummyrect')
                        }, function (e) {
                            return [function (e) {
                                    var t = e.$new('__transclude__', 0, { name: 'div' });
                                    return i('transclude', {
                                        id: '__transclude__',
                                        attributes: l({ class: 'undefined' }, '__transclude__'),
                                        __scope: t,
                                        _h: o('__transclude__')
                                    }, function (e) {
                                        return [];
                                    });
                                }(e)];
                        })
                    ])]);
            }
        }
    },
    cssvars: {},
    mediaqueries: {},
    files: [
        {
            id: 'kgpyhs0',
            size: 173486,
            width: 512,
            height: 512,
            name: 'noise.png',
            url: '../../noise.png',
            type: 'image',
            _type: 'File',
            meta: {},
            attr: {},
            par: void 0,
            versions: []
        },
        {
            id: 'kgdgdc7',
            size: 39300,
            width: 256,
            height: 256,
            name: 'noise2.png',
            url: '../../noise2.png',
            type: 'image',
            _type: 'File',
            meta: {},
            attr: {},
            par: void 0,
            versions: []
        },
        {
            id: 'kargyfk',
            size: 9605249,
            width: 8192,
            height: 4096,
            name: 'skybox-fall.jpg',
            url: '../../skybox-fall.jpg',
            type: 'image',
            _type: 'File',
            meta: {},
            attr: {},
            par: void 0,
            versions: []
        },
        {
            id: 'k7bjrt5',
            size: 1050067,
            width: 1024,
            height: 1024,
            name: 'leaves.png',
            url: '../../leaves.png',
            type: 'image',
            _type: 'File',
            meta: {},
            attr: {},
            par: void 0,
            versions: []
        },
        {
            id: 'k9qinhx',
            size: 1187680,
            width: 1024,
            height: 1024,
            name: 'leaf.png',
            url: '../../leaf.png',
            type: 'image',
            _type: 'File',
            meta: {},
            attr: {},
            par: void 0,
            versions: []
        },
        {
            id: 'kryif70',
            size: 66999920,
            width: void 0,
            height: void 0,
            name: 'cabin-scene.glb',
            url: '../../cabin-scene.glb',
            type: 'glb',
            _type: 'File',
            meta: {},
            attr: {},
            par: void 0,
            versions: []
        },
        {
            id: 'kk3e698',
            size: 943584,
            width: 888,
            height: 888,
            name: 'image.png',
            url: '../../image.png',
            type: 'image',
            _type: 'File',
            meta: {},
            attr: {},
            par: void 0,
            versions: []
        },
        {
            id: 'kdifgs4',
            size: 895498,
            width: 888,
            height: 888,
            name: 'Unknown.png',
            url: '../../Unknown.png',
            type: 'image',
            _type: 'File',
            meta: {},
            attr: {},
            par: void 0,
            versions: []
        }
    ],
    pages: [{
            filename: 'index.js',
            url: 'index.js',
            hash: 'a668a715ae',
            id: 'index'
        }],
    settings: { routes: [] }
};