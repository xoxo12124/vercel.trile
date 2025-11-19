const _0x33069f = _0x21c7;
(function(_0x28ac74, _0x28a4a6) {
    const _0x2b289c = _0x21c7,
        _0x3af150 = _0x28ac74();
    while (!![]) {
        try {
            const _0x388b81 = -parseInt(_0x2b289c(0xd3)) / 0x1 + parseInt(_0x2b289c(0xe1)) / 0x2 * (-parseInt(_0x2b289c(0x10c)) / 0x3) + parseInt(_0x2b289c(0x101)) / 0x4 * (-parseInt(_0x2b289c(0xc4)) / 0x5) + parseInt(_0x2b289c(0xc2)) / 0x6 * (parseInt(_0x2b289c(0x10d)) / 0x7) + -parseInt(_0x2b289c(0xd6)) / 0x8 + -parseInt(_0x2b289c(0xf1)) / 0x9 + parseInt(_0x2b289c(0xcc)) / 0xa;
            if (_0x388b81 === _0x28a4a6) break;
            else _0x3af150['push'](_0x3af150['shift']());
        } catch (_0x478b71) {
            _0x3af150['push'](_0x3af150['shift']());
        }
    }
}(_0x3255, 0x9637e));
const choices = new Choices(_0x33069f(0xb7), {
    'searchEnabled': !![],
    'shouldSort': ![],
    'itemSelectText': ''
});
document[_0x33069f(0xc7)]('#workName')[_0x33069f(0xcd)](_0x33069f(0xc9), generateAd);

function _0x3255() {
    const _0x259fcd = ['price', 'on\x20Vespucci\x20Boulevard', 'Hiring', '\x20years\x20of\x20experience', 'locksmith', '15ncbCuh', '45080EjbPQe', 'action', 'input', 'land\x20worker', 'solar\x20panel', 'experience', '#workName', 'Hiring\x20workers\x20for\x20collector\x20job', 'endsWith', 'trim', 'Looking\x20for\x20work\x20as\x20a\x20collector', 'and', 'Hiring\x20', 'timeUnit', 'lawyer', 'Looking\x20for\x20a\x20job\x20to\x20plant\x20a\x20solar\x20panel', 'includes', '138IwcwEC', 'toLocaleString', '20IeOpPQ', 'gardener', 'output', 'querySelector', 'cameraman', 'change', 'trucker', 'Looking\x20for\x20work\x20as\x20', '21958240mgbZFQ', 'addEventListener', 'Select\x20a\x20work\x20type', 'clipboard', 'workNumber', 'checked', 'singer', '300003rkOssc', 'million', 'input[name=\x22action\x22]:checked', '1624880tZVtaT', 'test', 'replace', '\x20Million', 'oil\x20man', 'Looking\x20for\x20a\x20job.\x20Salary:\x20Negotiable.', 'firefighter', 'timeUnitOptions', 'getElementById', 'Looking\x20for\x20a\x20job\x20at\x20construction\x20site\x20№', '.\x20Salary:\x20', '233620XbcWWD', 'in\x20Pillbox\x20Hill', 'personal\x20assistant', 'input[name=\x22', 'textContent', 'driver', 'workName', 'construction\x20site', 'Hiring\x20workers\x20at\x20construction\x20site\x20№', 'toLowerCase', 'Negotiable', 'value', 'style', 'year', 'forEach', 'Hiring\x20workers\x20for\x20solar\x20panel\x20plantation', '4357467ohjKme', 'professional\x20dancer', '\x20at\x20construction\x20site\x20№', 'Looking\x20for\x20a\x20job', 'on\x20Calais\x20Avenue', '\x20with\x20', 'Hiring\x20professional\x20dancers', 'setChoiceByValue', 'photographer', 'flex', 'en-US', 'in\x20Mirror\x20Park', 'surveyor', 'pilot', 'input[name=\x22timeUnit\x22]', 'Your\x20AD\x20will\x20appear\x20here.', '157324znYDNc', 'collector', '.choices', 'input[name=\x22action\x22][value=\x22Hiring\x22]', 'electrician', 'querySelectorAll'];
    _0x3255 = function() {
        return _0x259fcd;
    };
    return _0x3255();
}
const observer = new MutationObserver(generateAd),
    choicesElement = document[_0x33069f(0xc7)](_0x33069f(0x103));
choicesElement && observer['observe'](choicesElement, {
    'childList': !![],
    'subtree': !![]
});

function updateTimeUnitDisplay() {
    const _0x58d18 = _0x33069f;
    document[_0x58d18(0xde)](_0x58d18(0xdd))[_0x58d18(0xed)]['display'] = _0x58d18(0xfa);
}

function parsePrice(_0x1e82dd) {
    const _0xb2a09f = _0x33069f;
    _0x1e82dd = _0x1e82dd[_0xb2a09f(0xba)]()[_0xb2a09f(0xea)]();
    if (_0x1e82dd === '') return _0xb2a09f(0xeb);
    let _0x1623a6;
    if (_0x1e82dd[_0xb2a09f(0xb9)]('k')) {
        let _0x500dc9 = parseInt(_0x1e82dd[_0xb2a09f(0xd8)](/[^\d]/g, '')) * 0x3e8;
        _0x1623a6 = '$' + _0x500dc9[_0xb2a09f(0xc3)](_0xb2a09f(0xfb))[_0xb2a09f(0xd8)](/,/g, '.');
    } else {
        if (_0x1e82dd[_0xb2a09f(0xb9)]('m')) {
            let _0x216773 = parseFloat(_0x1e82dd[_0xb2a09f(0xd8)](/[^\d.]/g, '')) || 0x0;
            _0x1623a6 = '$' + _0x216773 + _0xb2a09f(0xd9);
        } else {
            if (/^[\d.,\s]+$/ [_0xb2a09f(0xd7)](_0x1e82dd)) {
                let _0x548547 = parseInt(_0x1e82dd[_0xb2a09f(0xd8)](/[.,\s]/g, ''), 0xa);
                _0x1623a6 = '$' + _0x548547[_0xb2a09f(0xc3)](_0xb2a09f(0xfb))[_0xb2a09f(0xd8)](/,/g, '.');
            } else _0x1623a6 = '$' + _0x1e82dd;
        }
    }
    return _0x1623a6;
}

function generateAd() {
    const _0x3fa16c = _0x33069f;
    let _0x1ee7f3 = document[_0x3fa16c(0xde)]('workName') ? document[_0x3fa16c(0xde)]('workName')[_0x3fa16c(0xec)][_0x3fa16c(0xba)]() : '';
    const _0x395319 = document[_0x3fa16c(0xde)](_0x3fa16c(0xd0)) ? document[_0x3fa16c(0xde)](_0x3fa16c(0xd0))[_0x3fa16c(0xec)][_0x3fa16c(0xba)]() : '',
        _0x367fdf = document['getElementById'](_0x3fa16c(0xb6)) ? document[_0x3fa16c(0xde)](_0x3fa16c(0xb6))[_0x3fa16c(0xec)][_0x3fa16c(0xba)]() : '',
        _0xbbc703 = document[_0x3fa16c(0xde)]('price') ? document['getElementById'](_0x3fa16c(0x107))[_0x3fa16c(0xec)][_0x3fa16c(0xba)]() : '',
        _0x1f93b7 = document[_0x3fa16c(0xc7)](_0x3fa16c(0xd5)),
        _0x15c5ff = _0x1f93b7 ? _0x1f93b7[_0x3fa16c(0xec)] : _0x3fa16c(0x109),
        _0x3310e6 = document[_0x3fa16c(0xc7)]('input[name=\x22timeUnit\x22]:checked'),
        _0x45999e = _0x3310e6 ? _0x3310e6[_0x3fa16c(0xec)] : '';
    updateTimeUnitDisplay();
    if (!_0x1ee7f3 && !_0x395319 && !_0xbbc703 && !_0x45999e && !_0x367fdf) {
        _0x15c5ff === _0x3fa16c(0xf4) ? document[_0x3fa16c(0xde)](_0x3fa16c(0xc6))['textContent'] = _0x3fa16c(0xdb) : document[_0x3fa16c(0xde)](_0x3fa16c(0xc6))[_0x3fa16c(0xe5)] = _0x3fa16c(0x100);
        return;
    }
    if (_0x1ee7f3 && (_0x1ee7f3['includes'](',') || _0x1ee7f3[_0x3fa16c(0xc1)]('&') || _0x1ee7f3[_0x3fa16c(0xc1)](_0x3fa16c(0xbc)))) {
        document[_0x3fa16c(0xde)](_0x3fa16c(0xc6))[_0x3fa16c(0xe5)] = 'Only\x20one\x20work\x20allowed\x20per\x20AD';
        return;
    }
    const _0x19d434 = {
            '1': _0x3fa16c(0x108),
            '2': _0x3fa16c(0xf5),
            '3': _0x3fa16c(0xe2),
            '4': _0x3fa16c(0xfc)
        },
        _0x332bec = [_0x3fa16c(0x10b), 'electrician', _0x3fa16c(0xb4), _0x3fa16c(0xfd), _0x3fa16c(0xe6)],
        _0x5e9cb9 = [_0x3fa16c(0xca), _0x3fa16c(0xbf), 'dj', _0x3fa16c(0xf9), _0x3fa16c(0xc8), 'bodyguard', _0x3fa16c(0xf2), _0x3fa16c(0xda), _0x3fa16c(0xc5), _0x3fa16c(0xfe), _0x3fa16c(0x102), _0x3fa16c(0xdc), _0x3fa16c(0xe3), _0x3fa16c(0xd2)],
        _0x2a0906 = ['solar\x20panel', _0x3fa16c(0xe8)];
    let _0xfebd3b = _0x1ee7f3[_0x3fa16c(0xea)](),
        _0xe9a88a = '';
    if (_0x367fdf) {
        const _0x18d670 = parseInt(_0x367fdf);
        if (!isNaN(_0x18d670) && _0x18d670 > 0x0) _0xe9a88a = _0x3fa16c(0xf6) + _0x18d670 + _0x3fa16c(0x10a);
        else _0x367fdf[_0x3fa16c(0xea)]()[_0x3fa16c(0xc1)](_0x3fa16c(0xee)) ? _0xe9a88a = _0x3fa16c(0xf6) + _0x367fdf : _0xe9a88a = _0x3fa16c(0xf6) + _0x367fdf + _0x3fa16c(0x10a);
    }
    if (_0xfebd3b && !_0x332bec['includes'](_0xfebd3b) && !_0x5e9cb9[_0x3fa16c(0xc1)](_0xfebd3b) && !_0x2a0906[_0x3fa16c(0xc1)](_0xfebd3b)) {
        document[_0x3fa16c(0xde)](_0x3fa16c(0xc6))[_0x3fa16c(0xe5)] = 'Invalid\x20work\x20role.\x20Please\x20select\x20from\x20the\x20available\x20options.';
        return;
    }
    let _0x2b7479 = parsePrice(_0xbbc703);
    _0x45999e && (_0x2b7479 += '\x20' + _0x45999e);
    let _0x5b1754 = '';
    if (_0xfebd3b === _0x3fa16c(0xb5)) _0x15c5ff === _0x3fa16c(0x109) ? _0x5b1754 = _0x3fa16c(0xf0) : _0x5b1754 = _0x3fa16c(0xc0);
    else {
        if (_0xfebd3b === _0x3fa16c(0xe8)) {
            if (_0x395319) {
                const _0x35215b = _0x19d434[_0x395319] || '';
                if (_0x15c5ff === _0x3fa16c(0x109)) {
                    _0x5b1754 = _0x3fa16c(0xe9) + _0x395319;
                    if (_0x35215b) _0x5b1754 += ',\x20' + _0x35215b;
                } else {
                    _0x5b1754 = _0x3fa16c(0xdf) + _0x395319;
                    if (_0x35215b) _0x5b1754 += ',\x20' + _0x35215b;
                }
            } else _0x15c5ff === _0x3fa16c(0x109) ? _0x5b1754 = 'Hiring\x20workers\x20at\x20construction\x20site' : _0x5b1754 = 'Looking\x20for\x20a\x20job\x20at\x20the\x20construction\x20site';
        } else {
            if (_0xfebd3b === _0x3fa16c(0x102)) _0x15c5ff === _0x3fa16c(0x109) ? _0x5b1754 = _0x3fa16c(0xb8) : _0x5b1754 = _0x3fa16c(0xbb);
            else {
                if (_0x395319 && _0x332bec['includes'](_0xfebd3b)) {
                    const _0x38a8b9 = _0x19d434[_0x395319] || '';
                    if (_0x15c5ff === _0x3fa16c(0x109)) {
                        const _0x264911 = _0xfebd3b === _0x3fa16c(0x105) ? 'an' : 'a';
                        _0x5b1754 = _0x3fa16c(0xbd) + _0x264911 + '\x20' + _0xfebd3b + _0xe9a88a + _0x3fa16c(0xf3) + _0x395319;
                        if (_0x38a8b9) _0x5b1754 += ',\x20' + _0x38a8b9;
                    } else {
                        const _0x2480e7 = _0xfebd3b === 'electrician' ? 'an' : 'a';
                        _0x5b1754 = 'Looking\x20for\x20work\x20as\x20' + _0x2480e7 + '\x20' + _0xfebd3b + _0xe9a88a + _0x3fa16c(0xf3) + _0x395319;
                        if (_0x38a8b9) _0x5b1754 += ',\x20' + _0x38a8b9;
                    }
                } else {
                    if (_0x395319 && !_0xfebd3b) {
                        const _0x29d14a = _0x19d434[_0x395319] || '';
                        if (_0x15c5ff === _0x3fa16c(0x109)) {
                            _0x5b1754 = 'Hiring\x20workers\x20at\x20construction\x20site\x20№' + _0x395319;
                            if (_0x29d14a) _0x5b1754 += ',\x20' + _0x29d14a;
                        } else {
                            _0x5b1754 = _0x3fa16c(0xdf) + _0x395319;
                            if (_0x29d14a) _0x5b1754 += ',\x20' + _0x29d14a;
                        }
                    } else {
                        if (_0xfebd3b && _0x5e9cb9[_0x3fa16c(0xc1)](_0xfebd3b)) {
                            if (_0x15c5ff === _0x3fa16c(0x109)) {
                                let _0x4a2f49 = _0xfebd3b === 'dj' ? 'DJ' : _0xfebd3b;
                                if (_0xfebd3b === 'professional\x20dancer') _0x5b1754 = _0x3fa16c(0xf7) + _0xe9a88a;
                                else {
                                    const _0x456cc5 = [_0x3fa16c(0x105), _0x3fa16c(0xda)][_0x3fa16c(0xc1)](_0xfebd3b) ? 'an' : 'a';
                                    _0x5b1754 = _0x3fa16c(0xbd) + _0x456cc5 + '\x20' + _0x4a2f49 + _0xe9a88a;
                                }
                            } else {
                                const _0x404917 = [_0x3fa16c(0x105), _0x3fa16c(0xda)][_0x3fa16c(0xc1)](_0xfebd3b) ? 'an' : 'a';
                                let _0x2b0936 = _0xfebd3b === 'dj' ? 'DJ' : _0xfebd3b;
                                _0xfebd3b === _0x3fa16c(0xf2) ? _0x5b1754 = 'Looking\x20for\x20work\x20as\x20a\x20professional\x20dancer' + _0xe9a88a : _0x5b1754 = _0x3fa16c(0xcb) + _0x404917 + '\x20' + _0x2b0936 + _0xe9a88a;
                            }
                        } else {
                            if (_0xfebd3b && _0x332bec['includes'](_0xfebd3b)) {
                                if (_0x15c5ff === _0x3fa16c(0x109)) {
                                    const _0x5c1fb6 = _0xfebd3b === _0x3fa16c(0x105) ? 'an' : 'a';
                                    _0x5b1754 = _0x3fa16c(0xbd) + _0x5c1fb6 + '\x20' + _0xfebd3b + _0xe9a88a;
                                } else {
                                    const _0x1181d8 = _0xfebd3b === _0x3fa16c(0x105) ? 'an' : 'a';
                                    _0x5b1754 = _0x3fa16c(0xcb) + _0x1181d8 + '\x20' + _0xfebd3b + _0xe9a88a;
                                }
                            } else !_0xfebd3b && !_0x395319 && (_0x15c5ff === _0x3fa16c(0x109) ? _0x5b1754 = _0x3fa16c(0xce) : _0x5b1754 = _0x3fa16c(0xf4));
                        }
                    }
                }
            }
        }
    }
    _0x2b7479[_0x3fa16c(0xea)]()[_0x3fa16c(0xc1)](_0x3fa16c(0xd4)) || _0x45999e ? _0x5b1754 += _0x3fa16c(0xe0) + _0x2b7479 + '.' : _0x5b1754 += '.\x20Salary:\x20' + _0x2b7479, document['getElementById'](_0x3fa16c(0xc6))['textContent'] = _0x5b1754;
}

function copyAd() {
    const _0x267633 = _0x33069f,
        _0x742475 = document['getElementById'](_0x267633(0xc6))[_0x267633(0xe5)];
    navigator[_0x267633(0xcf)]['writeText'](_0x742475);
}

function clearAll() {
    const _0x3d90ab = _0x33069f;
    choices[_0x3d90ab(0xf8)](''), updateTimeUnitDisplay(), document[_0x3d90ab(0xde)](_0x3d90ab(0xd0))[_0x3d90ab(0xec)] = '', document[_0x3d90ab(0xde)](_0x3d90ab(0xb6))[_0x3d90ab(0xec)] = '', document[_0x3d90ab(0xde)](_0x3d90ab(0x107))[_0x3d90ab(0xec)] = '', document[_0x3d90ab(0x106)](_0x3d90ab(0xff))[_0x3d90ab(0xef)](_0x26915c => _0x26915c['checked'] = ![]), document[_0x3d90ab(0x106)]('input[name=\x22action\x22]')[_0x3d90ab(0xef)](_0x3fd161 => _0x3fd161[_0x3d90ab(0xd1)] = ![]), document[_0x3d90ab(0xc7)](_0x3d90ab(0x104))['checked'] = !![], document['querySelectorAll']('input[type=\x22text\x22]')[_0x3d90ab(0xef)](_0xe3370f => _0xe3370f[_0x3d90ab(0xec)] = ''), generateAd();
}[_0x33069f(0xe7), _0x33069f(0xd0), _0x33069f(0xb6), _0x33069f(0x107)]['forEach'](_0x2504db => {
    const _0x628c44 = _0x33069f;
    document[_0x628c44(0xde)](_0x2504db)[_0x628c44(0xcd)](_0x628c44(0x10f), generateAd), document[_0x628c44(0xde)](_0x2504db)['addEventListener'](_0x628c44(0xc9), generateAd);
}), document[_0x33069f(0x106)](_0x33069f(0xff))[_0x33069f(0xef)](_0x1ca0b5 => _0x1ca0b5[_0x33069f(0xcd)](_0x33069f(0xc9), generateAd)), document[_0x33069f(0x106)]('input[name=\x22action\x22]')['forEach'](_0x3065aa => _0x3065aa[_0x33069f(0xcd)](_0x33069f(0xc9), generateAd)), updateTimeUnitDisplay(), generateAd();

function enforceSingleSelect(_0x5299a2) {
    const _0x249cb7 = _0x33069f;
    document[_0x249cb7(0x106)](_0x249cb7(0xe4) + _0x5299a2 + '\x22]')['forEach'](_0x10cd39 => {
        const _0x27be46 = _0x249cb7;
        _0x10cd39['addEventListener'](_0x27be46(0xc9), function() {
            const _0x5d2755 = _0x27be46;
            this[_0x5d2755(0xd1)] && document[_0x5d2755(0x106)](_0x5d2755(0xe4) + _0x5299a2 + '\x22]')[_0x5d2755(0xef)](_0x21080e => {
                const _0xc5868a = _0x5d2755;
                if (_0x21080e !== this) _0x21080e[_0xc5868a(0xd1)] = ![];
            }), generateAd();
        });
    });
}

function _0x21c7(_0x3b8d59, _0x288bed) {
    const _0x3255a2 = _0x3255();
    return _0x21c7 = function(_0x21c782, _0x28ddf7) {
        _0x21c782 = _0x21c782 - 0xb4;
        let _0x59fe54 = _0x3255a2[_0x21c782];
        return _0x59fe54;
    }, _0x21c7(_0x3b8d59, _0x288bed);
}
enforceSingleSelect(_0x33069f(0x10e)), enforceSingleSelect(_0x33069f(0xbe));