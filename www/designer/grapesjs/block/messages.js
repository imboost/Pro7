blockManager.add('messages', {
    label: 'Messages',
    attributes: {
        class: 'fa fa-square',
        title: 'Messages'
    },
    content: '<div class="page">' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="title">Messages</div>' +
        '  </div>' +
        '</div>' +
        '<div class="toolbar messagebar">' +
        '  <div class="toolbar-inner">' +
        '    <div class="messagebar-area">' +
        '      <textarea class="resizable" placeholder="Message"></textarea>' +
        '    </div><a class="link send-link" href="#">Send</a>' +
        '  </div>' +
        '</div>' +
        '<div class="page-content messages-content">' +
        '  <div class="messages">' +
        '    <!-- Messages title -->' +
        '    <div class="messages-title"><b>Sunday, Feb 9,</b> 12:58</div>' +
        '    <!-- Full layout sent message -->' +
        '    <div class="message message-sent">' +
        '      <div class="message-avatar" style="background-image:url(http://lorempixel.com/100/100/people/7);"></div>' +
        '      <div class="message-content">' +
        '        <div class="message-name">John Doe</div>' +
        '        <div class="message-header">Message header</div>' +
        '        <div class="message-bubble">' +
        '          <div class="message-text-header">Text header</div>' +
        '          <div class="message-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>' +
        '          <div class="message-text-footer">Text footer</div>' +
        '        </div>' +
        '        <div class="message-footer">Message footer</div>' +
        '      </div>' +
        '    </div>' +
        '    <!-- Full layout received message -->' +
        '    <div class="message message-received">' +
        '      <div class="message-avatar" style="background-image:url(http://lorempixel.com/100/100/people/7);"></div>' +
        '      <div class="message-content">' +
        '        <div class="message-name">John Doe</div>' +
        '        <div class="message-header">Message header</div>' +
        '        <div class="message-bubble">' +
        '          <div class="message-text-header">Text header</div>' +
        '          <div class="message-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>' +
        '          <div class="message-text-footer">Text footer</div>' +
        '        </div>' +
        '        <div class="message-footer">Message footer</div>' +
        '      </div>' +
        '    </div>' +
        '    <!-- Messages -->' +
        '    <div class="message message-sent">' +
        '      <div class="message-content">' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">Hi, Kate</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-sent">' +
        '      <div class="message-content">' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">How are you?</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-received">' +
        '      <div class="message-avatar" style="background-image:url(http://lorempixel.com/100/100/people/9);"></div>' +
        '      <div class="message-content">' +
        '        <div class="message-name">Kate</div>' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">Hi, I am good!</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-received">' +
        '      <div class="message-avatar" style="background-image:url(http://lorempixel.com/100/100/people/7);"></div>' +
        '      <div class="message-content">' +
        '        <div class="message-name">Blue Ninja</div>' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">Hi there, I am also fine, thanks! And how are you?</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-sent">' +
        '      <div class="message-content">' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">Hey, Blue Ninja! Glad to see you ;)</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-sent">' +
        '      <div class="message-content">' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">Hey, look, cutest kitten ever!</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-sent">' +
        '      <div class="message-content">' +
        '        <div class="message-bubble">' +
        '          <div class="message-image"><img src="http://lorempixel.com/200/260/cats/4/" style="width:200px; height: 260px;"></div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-received">' +
        '      <div class="message-avatar" style="background-image:url(http://lorempixel.com/100/100/people/9);"></div>' +
        '      <div class="message-content">' +
        '        <div class="message-name">Kate</div>' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">Nice!</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-received">' +
        '      <div class="message-avatar" style="background-image:url(http://lorempixel.com/100/100/people/9);"></div>' +
        '      <div class="message-content">' +
        '        <div class="message-name">Kate</div>' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">Like it very much!</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-received">' +
        '      <div class="message-avatar" style="background-image:url(http://lorempixel.com/100/100/people/7);"></div>' +
        '      <div class="message-content">' +
        '        <div class="message-name">Blue Ninja</div>' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">Awesome!</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '</div>',
    category: {
        label: 'Messages',
        open: false
    }
});

blockManager.add('messages_bar', {
    label: 'Messagebar',
    attributes: {
        class: 'fa fa-square',
        title: 'Messagebar'
    },
    content: '<div class="page">' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="title">Messages</div>' +
        '  </div>' +
        '</div>' +
        '<div class="toolbar messagebar">' +
        '  <div class="toolbar-inner">' +
        '<a class="link toggle-sheet" href="#">' +
        '<i class="icon f7-icons ios-only">camera_fill</i>' +
        '<i class="icon material-icons md-only">camera_alt</i>' +
        '</a>' +
        '    <div class="messagebar-area">' +
        '      <textarea class="resizable" placeholder="Message"></textarea>' +
        '    </div><a class="link send-link" href="#">Send</a>' +
        '  </div>' +
        '</div>' +
        '<div class="page-content messages-content">' +
        '  <div class="messages">' +
        '    <!-- Messages title -->' +
        '    <div class="messages-title"><b>Sunday, Feb 9,</b> 12:58</div>' +
        '    <!-- Full layout sent message -->' +
        '    <div class="message message-sent">' +
        '      <div class="message-avatar" style="background-image:url(http://lorempixel.com/100/100/people/7);"></div>' +
        '      <div class="message-content">' +
        '        <div class="message-name">John Doe</div>' +
        '        <div class="message-header">Message header</div>' +
        '        <div class="message-bubble">' +
        '          <div class="message-text-header">Text header</div>' +
        '          <div class="message-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>' +
        '          <div class="message-text-footer">Text footer</div>' +
        '        </div>' +
        '        <div class="message-footer">Message footer</div>' +
        '      </div>' +
        '    </div>' +
        '    <!-- Full layout received message -->' +
        '    <div class="message message-received">' +
        '      <div class="message-avatar" style="background-image:url(http://lorempixel.com/100/100/people/7);"></div>' +
        '      <div class="message-content">' +
        '        <div class="message-name">John Doe</div>' +
        '        <div class="message-header">Message header</div>' +
        '        <div class="message-bubble">' +
        '          <div class="message-text-header">Text header</div>' +
        '          <div class="message-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>' +
        '          <div class="message-text-footer">Text footer</div>' +
        '        </div>' +
        '        <div class="message-footer">Message footer</div>' +
        '      </div>' +
        '    </div>' +
        '    <!-- Messages -->' +
        '    <div class="message message-sent">' +
        '      <div class="message-content">' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">Hi, Kate</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-sent">' +
        '      <div class="message-content">' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">How are you?</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-received">' +
        '      <div class="message-avatar" style="background-image:url(http://lorempixel.com/100/100/people/9);"></div>' +
        '      <div class="message-content">' +
        '        <div class="message-name">Kate</div>' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">Hi, I am good!</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-received">' +
        '      <div class="message-avatar" style="background-image:url(http://lorempixel.com/100/100/people/7);"></div>' +
        '      <div class="message-content">' +
        '        <div class="message-name">Blue Ninja</div>' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">Hi there, I am also fine, thanks! And how are you?</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-sent">' +
        '      <div class="message-content">' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">Hey, Blue Ninja! Glad to see you ;)</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-sent">' +
        '      <div class="message-content">' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">Hey, look, cutest kitten ever!</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-sent">' +
        '      <div class="message-content">' +
        '        <div class="message-bubble">' +
        '          <div class="message-image"><img src="http://lorempixel.com/200/260/cats/4/" style="width:200px; height: 260px;"></div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-received">' +
        '      <div class="message-avatar" style="background-image:url(http://lorempixel.com/100/100/people/9);"></div>' +
        '      <div class="message-content">' +
        '        <div class="message-name">Kate</div>' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">Nice!</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-received">' +
        '      <div class="message-avatar" style="background-image:url(http://lorempixel.com/100/100/people/9);"></div>' +
        '      <div class="message-content">' +
        '        <div class="message-name">Kate</div>' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">Like it very much!</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="message message-received">' +
        '      <div class="message-avatar" style="background-image:url(http://lorempixel.com/100/100/people/7);"></div>' +
        '      <div class="message-content">' +
        '        <div class="message-name">Blue Ninja</div>' +
        '        <div class="message-bubble">' +
        '          <div class="message-text">Awesome!</div>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
        '</div>',
    category: {
        label: 'Messages',
        open: false
    }
});