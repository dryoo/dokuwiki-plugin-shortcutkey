/**
 * Add shortcut keys to DokuWiki actions
 *
 * @author S.C. Yoo <dryoo@live.com>
 */
jQuery(function () {
    /**
     * Build an action URL. Never derive it from location.pathname: on
     * rewritten URLs that is the page id, so appending ?id=... to it breaks.
     */
    function actionUrl(params) {
        var id = encodeURIComponent(JSINFO['id'] || '');
        return DOKU_BASE + 'doku.php?id=' + id + (params ? '&' + params : '');
    }

    function go(url) {
        window.location.assign(url);
    }

    jQuery(document).on('keydown', function (e) {
        var target = e.target || e.srcElement;
        var tag = ((target && (target.tagName || target.nodeName)) || '').toUpperCase();

        // never steal keys while typing (INPUT, TEXTAREA, SELECT and editors
        // like the posemirror WYSIWYG that use a contenteditable DIV)
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || tag === 'DIV' || (target && target.isContentEditable)) {
            return;
        }

        // keep browser and OS shortcuts working
        if (e.ctrlKey || e.metaKey || e.altKey) {
            return;
        }

        var key = e.which;
        if (!key) {
            return;
        }

        switch (key) {
            case JSINFO['key_home']:
                go(JSINFO['DOKU_URL'] || DOKU_BASE);
                return false;
            case JSINFO['key_random']:
                go(actionUrl('do=randompage'));
                return false;
            case JSINFO['key_nsrandom']:
                go(actionUrl('do=nsrandompage'));
                return false;
            case JSINFO['key_show']:
                go(actionUrl('do=show'));
                return false;
            case JSINFO['key_media']:
                go(actionUrl('do=media'));
                return false;
            case JSINFO['key_top']:
                window.scrollTo(0, 0);
                return false;
            case JSINFO['key_diff']:
                go(actionUrl('do=diff'));
                return false;
            case JSINFO['key_backlink']:
                go(actionUrl('do=backlink'));
                return false;
            case JSINFO['key_recent']:
                go(actionUrl('do=recent'));
                return false;
            case JSINFO['key_edit']:
                go(actionUrl('do=edit'));
                return false;
            case JSINFO['key_search']:
                window.scrollTo(0, 0);
                var search = document.getElementById('qsearch__in');
                if (search) {
                    search.focus();
                }
                return false;
            case JSINFO['key_revisions']:
                go(actionUrl('do=revisions'));
                return false;
            case JSINFO['key_index']:
                go(actionUrl('do=index'));
                return false;
            case JSINFO['key_save']:
                var save = document.getElementById('edbtn__save');
                if (save) {
                    save.click();
                }
                return false;
        }
    });
});
