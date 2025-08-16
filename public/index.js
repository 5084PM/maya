export default {
    id: 'index',
    name: 'index',
    type: 'page',
    entities: {
        kvnm245: {
            name: 'webgl',
            id: 'kvnm245',
            states: [],
            ns: 'html',
            par: 'khlrcs3',
            properties: { default: {} },
            ctxt: !0
        },
        kmllje2: {
            name: 'group',
            id: 'kmllje2',
            states: [],
            ns: 'webgl',
            par: 'kvnm245',
            attributes: function (e) {
                return { default: {} };
            },
            properties: { default: {} },
            params: {
                default: {
                    height: 100,
                    transform: {
                        translate: {
                            x: 0,
                            y: 200,
                            z: -400
                        }
                    },
                    color: {
                        h: 279.78744583043124,
                        s: 69.99999999999997,
                        l: 70,
                        a: 1
                    }
                }
            },
            ctxt: !0
        },
        kxcfr3r: {
            name: 'skybox',
            id: 'kxcfr3r',
            states: [],
            ns: 'webgl',
            par: 'kmllje2',
            attributes: function (e) {
                return { default: {} };
            },
            properties: { default: {} },
            params: {
                default: {
                    color: {
                        h: 259.0515046580112,
                        s: 69.99999999999997,
                        l: 70,
                        a: 1,
                        hex: void 0
                    },
                    map: 'assets/skybox-fall.jpg?1755294816524'
                }
            },
            ctxt: !0
        },
        k2xu1zs: {
            name: 'group_1',
            id: 'k2xu1zs',
            states: [],
            ns: 'webgl',
            par: 'kmllje2',
            properties: { default: {} },
            params: {
                default: {
                    height: 100,
                    color: {
                        h: 126.89457447963039,
                        s: 69.99999999999997,
                        l: 70,
                        a: 1,
                        hex: void 0
                    }
                }
            },
            ctxt: !0
        },
        kz5otg0: {
            name: 'plane',
            id: 'kz5otg0',
            states: [],
            ns: 'webgl',
            par: 'k2xu1zs',
            attributes: function (e) {
                return { default: {} };
            },
            properties: { default: {} },
            params: {
                default: {
                    transform: {
                        translate: {
                            x: 476,
                            y: -347,
                            z: -955
                        },
                        scale: {
                            x: 10,
                            y: 10,
                            z: 1
                        }
                    },
                    color: {
                        h: 24,
                        s: 91.41,
                        l: 56.84,
                        a: 1,
                        hex: 'F67D2C'
                    },
                    map: 'assets/image.png?1755316287219'
                }
            },
            ctxt: !0
        },
        kji9q8x: {
            name: 'plane_1',
            id: 'kji9q8x',
            states: [],
            ns: 'webgl',
            par: 'k2xu1zs',
            attributes: function (e) {
                return { default: {} };
            },
            properties: { default: {} },
            params: {
                default: {
                    transform: {
                        translate: {
                            x: 1930,
                            y: -301,
                            z: -780
                        },
                        scale: {
                            x: 10,
                            y: 10,
                            z: 1
                        }
                    },
                    color: {
                        h: 24,
                        s: 91.41,
                        l: 56.84,
                        a: 1,
                        hex: 'F67D2C'
                    },
                    map: 'assets/Unknown.png?1755317457533'
                }
            },
            ctxt: !0
        },
        kkzvx8o: {
            name: 'plane_1_1',
            id: 'kkzvx8o',
            states: [],
            ns: 'webgl',
            par: 'k2xu1zs',
            attributes: function (e) {
                return { default: {} };
            },
            properties: { default: {} },
            params: {
                default: {
                    transform: {
                        translate: {
                            x: 1768,
                            y: -545,
                            z: 0
                        },
                        scale: {
                            x: 10,
                            y: 10,
                            z: 1
                        }
                    },
                    color: {
                        h: 24,
                        s: 91.41,
                        l: 56.84,
                        a: 1,
                        hex: 'F67D2C'
                    },
                    map: 'assets/Unknown.png?1755317457533'
                }
            },
            ctxt: !0
        },
        kwjj293: {
            name: 'model_1_1',
            id: 'kwjj293',
            states: [],
            ns: 'webgl',
            par: 'k2xu1zs',
            attributes: function (e) {
                return { default: {} };
            },
            properties: { default: {} },
            params: {
                default: {
                    src: 'assets/cabin-scene.glb?1755313824282',
                    transform: {
                        translate: {
                            x: 0,
                            y: 0,
                            z: -1500
                        },
                        rotate: {
                            x: 0,
                            y: -10,
                            z: 0
                        },
                        scale: {
                            x: 1,
                            y: 1,
                            z: 1
                        }
                    },
                    color: {
                        h: 236.59893645997437,
                        s: 69.99999999999997,
                        l: 70,
                        a: 1
                    }
                }
            },
            ctxt: !0
        },
        ke77fa4: {
            name: 'mirror',
            id: 'ke77fa4',
            states: [],
            ns: 'webgl',
            par: 'kmllje2',
            attributes: function (e) {
                return { default: {} };
            },
            properties: { default: {} },
            params: {
                default: {
                    width: 100,
                    height: 100,
                    transform: {
                        translate: {
                            x: 0,
                            y: 60,
                            z: 538
                        },
                        rotate: {
                            x: -89,
                            y: 0,
                            z: 0
                        },
                        scale: {
                            x: 1,
                            y: 1,
                            z: 1
                        }
                    },
                    color: {
                        h: 210,
                        s: 60.59000000000001,
                        l: 48.54,
                        a: 1,
                        hex: '317CC7'
                    },
                    materialType: 'basic',
                    shape: 'disc',
                    displacement: 'assets/noise.png?1755293884234'
                }
            },
            ctxt: !0
        },
        __presets__: {
            name: 'div',
            id: '__presets__',
            states: [],
            ns: 'logic',
            properties: { default: {} },
            logic: {
                default: function (e) {
                    try {
                        return { src: '__presets__' };
                    } catch (e) {
                    }
                }
            },
            ctxt: !0
        }
    },
    attributes: function (e) {
        return {
            id: 'page',
            class: 'page index'
        };
    },
    properties: { default: {} },
    config: {
        default: {
            animations: {},
            list: {},
            item: {},
            params: {},
            css: {}
        }
    },
    ctxt: !0,
    template: function (e, t = {}) {
        const {
            h: r,
            incl: a,
            getContentFor: s,
            getModifiersFor: n,
            getConfigFor: l,
            getScroller: i,
            getScroll: o,
            getProps: u,
            getAttrs: c,
            getParams: p
        } = t;
        return r('div', {
            attributes: {
                id: 'page',
                class: 'page index'
            },
            __scope: e,
            _h: u('index'),
            key: 'page-index'
        }, [
            r('div', {
                id: 'khlrcs3',
                attributes: c({ class: 'element' }, 'khlrcs3'),
                _h: u('khlrcs3')
            }, function (e) {
                return [function (e) {
                        var t = e.$new('kvnm245', 0, { name: 'webgl' });
                        return r('webgl', {
                            id: 'kvnm245',
                            attributes: c({ class: 'webgl' }, 'kvnm245'),
                            __scope: t,
                            _h: u('kvnm245')
                        }, function (e) {
                            return [function (e) {
                                    var t = e.$new('kmllje2', 0, { name: 'group' });
                                    return r('webgl-group', {
                                        id: 'kmllje2',
                                        attributes: c({ class: 'group' }, 'kmllje2'),
                                        params: p('kmllje2'),
                                        __scope: t,
                                        _h: u('kmllje2')
                                    }, function (e) {
                                        return [
                                            function (e) {
                                                var t = e.$new('kxcfr3r', 0, { name: 'skybox' });
                                                return r('webgl-skybox', {
                                                    id: 'kxcfr3r',
                                                    attributes: c({ class: 'skybox' }, 'kxcfr3r'),
                                                    params: p('kxcfr3r'),
                                                    __scope: t,
                                                    _h: u('kxcfr3r')
                                                }, function (e) {
                                                    return [];
                                                });
                                            }(e),
                                            function (e) {
                                                var t = e.$new('k2xu1zs', 0, { name: 'group_1' });
                                                return r('webgl-group', {
                                                    id: 'k2xu1zs',
                                                    attributes: c({ class: 'group_1' }, 'k2xu1zs'),
                                                    params: p('k2xu1zs'),
                                                    __scope: t,
                                                    _h: u('k2xu1zs')
                                                }, function (e) {
                                                    return [
                                                        function (e) {
                                                            var t = e.$new('kz5otg0', 0, { name: 'plane' });
                                                            return r('webgl-plane', {
                                                                id: 'kz5otg0',
                                                                attributes: c({ class: 'plane' }, 'kz5otg0'),
                                                                params: p('kz5otg0'),
                                                                __scope: t,
                                                                _h: u('kz5otg0')
                                                            }, function (e) {
                                                                return [];
                                                            });
                                                        }(e),
                                                        function (e) {
                                                            var t = e.$new('kji9q8x', 0, { name: 'plane_1' });
                                                            return r('webgl-plane', {
                                                                id: 'kji9q8x',
                                                                attributes: c({ class: 'plane_1' }, 'kji9q8x'),
                                                                params: p('kji9q8x'),
                                                                __scope: t,
                                                                _h: u('kji9q8x')
                                                            }, function (e) {
                                                                return [];
                                                            });
                                                        }(e),
                                                        function (e) {
                                                            var t = e.$new('kkzvx8o', 0, { name: 'plane_1_1' });
                                                            return r('webgl-plane', {
                                                                id: 'kkzvx8o',
                                                                attributes: c({ class: 'plane_1_1' }, 'kkzvx8o'),
                                                                params: p('kkzvx8o'),
                                                                __scope: t,
                                                                _h: u('kkzvx8o')
                                                            }, function (e) {
                                                                return [];
                                                            });
                                                        }(e),
                                                        function (e) {
                                                            var t = e.$new('kwjj293', 0, { name: 'model_1_1' });
                                                            return r('webgl-model', {
                                                                id: 'kwjj293',
                                                                attributes: c({ class: 'model_1_1' }, 'kwjj293'),
                                                                params: p('kwjj293'),
                                                                __scope: t,
                                                                _h: u('kwjj293')
                                                            }, function (e) {
                                                                return [];
                                                            });
                                                        }(e)
                                                    ];
                                                });
                                            }(e),
                                            function (e) {
                                                var t = e.$new('ke77fa4', 0, { name: 'mirror' });
                                                return r('webgl-mirror', {
                                                    id: 'ke77fa4',
                                                    attributes: c({ class: 'mirror' }, 'ke77fa4'),
                                                    params: p('ke77fa4'),
                                                    __scope: t,
                                                    _h: u('ke77fa4')
                                                }, function (e) {
                                                    return [];
                                                });
                                            }(e)
                                        ];
                                    });
                                }(e)];
                        });
                    }(e)];
            }),
            function (e) {
                var t = e.$new('__presets__', 0, { name: 'div' });
                return r('include', {
                    id: '__presets__',
                    attributes: c({ class: 'undefined' }, '__presets__'),
                    __scope: t,
                    _h: u('__presets__')
                }, function (e) {
                    return [];
                });
            }(e)
        ]);
    }
};