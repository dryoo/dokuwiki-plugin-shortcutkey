/**
 * Add shortcutkeys to your dokuwiki actions
 *
 * @author S.C. Yoo <dryoo@live.com>
 */
jQuery(document).keydown(function(e){
    if (window.event) var e=window.event,f=e.srcElement,nn=f.tagName;
        else var f=e.target,nn=f.nodeName;/* GET FOCUS 현재 포커스를 얻음*/
    if (nn!='INPUT'&&nn!='TEXTAREA') {/* In TYPING? 현재 문자입력중이 아닌지 확인*/
        var uurl=JSINFO['DOKU_URL'] + "?id=" +JSINFO['id']; 
        switch (e.which) {
            case JSINFO['key_home']:
                 window.open(JSINFO['DOKU_URL'],'_self',false);return false; break; 
            case JSINFO['key_random']:
                window.open(uurl +'&do=randompage','_self',false);return false; break; 
            case JSINFO['key_nsrandom']:
                 window.open(uurl +'&do=nsrandompage','_self',false);return false; break; 
            case JSINFO['key_show']:
                 window.open(uurl +'&do=show','_self',false); return false; break;
            case JSINFO['key_media']:
                 window.open(uurl +'&do=media','_self',false); return false; break;
            case JSINFO['key_top']:
                 window.open('#dokuwiki__top','_self',false); return false; break;
            case JSINFO['key_diff']:
                 window.open(uurl +'&do=diff','_self',false); return false; break;
            case JSINFO['key_backlink']:
                 window.open(uurl +'&do=backlink','_self',false); return false; break;
            case JSINFO['key_recent']:
                 window.open(uurl +'&do=recent','_self',false); return false; break;
            case JSINFO['key_edit']:
                 window.open(uurl +'&do=edit','_self',false);return false; break; 
            case JSINFO['key_search']:
                document.getElementById('qsearch__in').focus(); return false; break;
            case JSINFO['key_revisions']:
                window.open(uurl +'&do=revisions','_self',false);return false; break;
            case JSINFO['key_index']:
                window.open(uurl +'&do=index','_self',false);return false; break;
            case JSINFO['key_save']:
                document.getElementById('edbtn__save').click();return false; break;
        }
} });
