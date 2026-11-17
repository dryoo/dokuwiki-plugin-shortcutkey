<?php
/**
 * DokuWiki Plugin shortcutkey (Action Component)
 *
 * @license GPL 2 http://www.gnu.org/licenses/gpl-2.0.html
 * @author  S.C. Yoo <dryoo@live.com>
 */

// must be run within Dokuwiki
if(!defined('DOKU_INC')) die();

class action_plugin_shortcutkey extends DokuWiki_Action_Plugin {

    /**
     * Registers a callback function for a given event
     */
    public function register(Doku_Event_Handler $controller) {
       $controller->register_hook('DOKUWIKI_STARTED', 'AFTER', $this, 'handle_dokuwiki_started');
    }

    /**
     * @param Doku_Event $event  event object by reference
     */
    public function handle_dokuwiki_started(Doku_Event &$event, $param) {
        global $JSINFO;
        $_actions= array('show','edit','backlink','revisions','diff','media','index','recent','search','home','top', 'save');
        $JSINFO['DOKU_URL']=DOKU_URL;

        foreach ($_actions as $_a) {
            $JSINFO['key_'.$_a] = $this->keycode('key_'.$_a);
        }
        if(!plugin_isdisabled('randompage')) {
            $JSINFO['key_random']   = $this->keycode('key_random');
            $JSINFO['key_nsrandom'] = $this->keycode('key_nsrandom');
        }
    }

    /**
     * Turn a configured key into the numeric value jQuery reports in e.which.
     * An empty setting returns 0, which no key can match, so the shortcut is
     * simply disabled.
     *
     * @param string $setting name of the config option
     * @return int
     */
    protected function keycode($setting) {
        $key = trim((string) $this->getConf($setting));
        if ($key === '') {
            return 0;
        }
        return ord(strtoupper($key[0]));
    }
}

// vim:ts=4:sw=4:et:
