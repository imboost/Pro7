blockManager.add('table_normal_card', {
    label: 'Normal',
    attributes: {
        class: 'fa fa-square',
        title: 'Normal Table'
    },
    content: '<div class="data-table card">' +
        '  <table>' +
        '    <thead>' +
        '      <tr>' +
        '        <th class="label-cell">Desert (100g serving)</th>' +
        '        <th class="numeric-cell">Calories</th>' +
        '        <th class="tablet-only">Comment</th>' +
        '      </tr>' +
        '    </thead>' +
        '    <tbody>' +
        '      <tr>' +
        '        <td class="label-cell">Frozen yogurt</td>' +
        '        <td class="numeric-cell">159</td>' +
        '        <td class="tablet-only">I like it!</td>' +
        '      </tr>' +
        '    </tbody>' +
        '  </table>' +
        '</div>',
    category: {
        label: 'Table Card',
        open: false
    }
});

blockManager.add('table_pagination_footer_card', {
    label: 'Pagination',
    attributes: {
        class: 'fa fa-square',
        title: 'Table With Pagination On Footer'
    },
    content: '<div class="data-table card">' +
        '  <table>' +
        '    <thead>' +
        '      <tr>' +
        '        <th class="label-cell">Desert (100g serving)</th>' +
        '        <th class="numeric-cell">Calories</th>' +
        '        <th class="numeric-cell">Fat (g)</th>' +
        '        <th class="numeric-cell">Carbs</th>' +
        '        <th class="numeric-cell">Protein (g)</th>' +
        '      </tr>' +
        '    </thead>' +
        '    <tbody>' +
        '      <tr>' +
        '        <td class="label-cell">Frozen yogurt</td>' +
        '        <td class="numeric-cell">159</td>' +
        '        <td class="numeric-cell">6.0</td>' +
        '        <td class="numeric-cell">24</td>' +
        '        <td class="numeric-cell">4.0</td>' +
        '      </tr>' +
        '    </tbody>' +
        '  </table>' +
        '  <div class="data-table-footer">' +
        '    <div class="data-table-rows-select">' +
        '      Per page:' +
        '      <div class="input input-dropdown">' +
        '        <select>' +
        '          <option value="5">5</option>' +
        '          <option value="10">10</option>' +
        '          <option value="25">25</option>' +
        '          <option value="all">All</option>' +
        '        </select>' +
        '      </div>' +
        '    </div>' +
        '    <div class="data-table-pagination">' +
        '      <span class="data-table-pagination-label">1-5 of 10</span>' +
        '      <a href="#" class="link disabled">' +
        '        <i class="icon icon-prev color-gray"></i>' +
        '      </a>' +
        '      <a href="#" class="link">' +
        '        <i class="icon icon-next color-gray"></i>' +
        '      </a>' +
        '    </div>' +
        '  </div>' +
        '</div>',
    category: {
        label: 'Table Card',
        open: false
    }
});

blockManager.add('table_checkbox_card', {
    label: 'Checkbox',
    attributes: {
        class: 'fa fa-square',
        title: 'Table With Checkbox'
    },
    content: '<div class="data-table data-table-init card">' +
        '  <table>' +
        '    <thead>' +
        '      <tr>' +
        '        <th class="checkbox-cell">' +
        '          <label class="checkbox">' +
        '            <input type="checkbox"/>' +
        '            <i class="icon-checkbox"></i>' +
        '          </label>' +
        '        </th>' +
        '        <th class="label-cell">Desert (100g serving)</th>' +
        '        <th class="numeric-cell">Calories</th>' +
        '        <th class="numeric-cell">Protein (g)</th>' +
        '      </tr>' +
        '    </thead>' +
        '    <tbody>' +
        '      <tr>' +
        '        <td class="checkbox-cell">' +
        '          <label class="checkbox">' +
        '            <input type="checkbox"/>' +
        '            <i class="icon-checkbox"></i>' +
        '          </label>' +
        '        </td>' +
        '        <td class="label-cell">Frozen yogurt</td>' +
        '        <td class="numeric-cell">159</td>' +
        '        <td class="numeric-cell">4.0</td>' +
        '      </tr>' +
        '    </tbody>' +
        '  </table>' +
        '</div>',

    category: {
        label: 'Table Card',
        open: false
    }
});

blockManager.add('table_inputs_card', {
    label: 'Inputs',
    attributes: {
        class: 'fa fa-square',
        title: 'Table With Inputs'
    },
    content: '<div class="data-table card">' +
        '  <table>' +
        '    <thead>' +
        '      <tr>' +
        '        <th class="input-cell">' +
        '          <span class="table-head-label">ID</span>' +
        '          <div class="input" style="width: 50px">' +
        '            <input type="number" placeholder="Filter">' +
        '          </div>' +
        '        </th>' +
        '        <th class="input-cell">' +
        '          <span class="table-head-label">Name</span>' +
        '          <div class="input">' +
        '            <input type="text" placeholder="Filter">' +
        '          </div>' +
        '        </th>' +
        '        <th class="input-cell">' +
        '          <span class="table-head-label">Gender</span>' +
        '          <div class="input input-dropdown">' +
        '            <select>' +
        '              <option value="All">All</option>' +
        '              <option value="Male">Male</option>' +
        '              <option value="Female">Female</option>' +
        '            </select>' +
        '          </div>' +
        '        </th>' +
        '      </tr>' +
        '    </thead>' +
        '    <tbody>' +
        '      <tr>' +
        '        <td>1</td>' +
        '        <td>John Doe</td>' +
        '        <td>john@doe.com</td>' +
        '        <td>Male</td>' +
        '      </tr>' +
        '    </tbody>' +
        '  </table>' +
        '</div>',
    category: {
        label: 'Table Card',
        open: false
    }
});

blockManager.add('table_header_card', {
    label: 'Header',
    attributes: {
        class: 'fa fa-square',
        title: 'Table With Header or Title'
    },
    content: '<div class="data-table data-table-init card">' +
        '  <div class="card-header">' +
        '    <div class="data-table-title">Nutrition</div>' +
        '    <div class="data-table-actions">' +
        '      <a class="link icon-only">' +
        '        <i class="icon f7-icons ios-only">sort</i>' +
        '        <i class="icon material-icons md-only">sort</i>' +
        '      </a>' +
        '      <a class="link icon-only">' +
        '        <i class="icon f7-icons ios-only">more_vertical_round</i>' +
        '        <i class="icon material-icons md-only">more_vert</i>' +
        '      </a>' +
        '    </div>' +
        '  </div>' +
        '  <div class="card-content">' +
        '    <table>' +
        '      <thead>' +
        '        <tr>' +
        '          <th class="checkbox-cell">' +
        '            <label class="checkbox">' +
        '              <input type="checkbox">' +
        '              <i class="icon-checkbox"></i>' +
        '            </label>' +
        '          </th>' +
        '          <th class="label-cell">Desert (100g serving)</th>' +
        '          <th class="numeric-cell">Calories</th>' +
        '        </tr>' +
        '      </thead>' +
        '      <tbody>' +
        '        <tr>' +
        '          <td class="checkbox-cell">' +
        '            <label class="checkbox">' +
        '              <input type="checkbox">' +
        '              <i class="icon-checkbox"></i>' +
        '            </label>' +
        '          </td>' +
        '          <td class="label-cell">Frozen yogurt</td>' +
        '          <td class="numeric-cell">159</td>' +
        '        </tr>' +
        '      </tbody>' +
        '    </table>' +
        '  </div>' +
        '</div> ',
    category: {
        label: 'Table Card',
        open: false
    }
});

blockManager.add('table_header_row_actions_card', {
    label: 'Header Row Actions',
    attributes: {
        class: 'fa fa-square',
        title: 'Table With Header And Actions On Row'
    },
    content: '<div class="data-table data-table-init card">' +
        '<div class="card-header">' +
        '  <!-- Table links/actions -->' +
        '  <div class="data-table-links">' +
        '    <a class="link">Add</a>' +
        '    <a class="link">Remove</a>' +
        '  </div>' +
        '  <!-- Table actions -->' +
        '  <div class="data-table-actions">' +
        '    <a class="link icon-only">' +
        '      <i class="icon f7-icons ios-only">sort</i>' +
        '      <i class="icon material-icons md-only">sort</i>' +
        '    </a>' +
        '    <a class="link icon-only">' +
        '      <i class="icon f7-icons ios-only">more_vertical_round</i>' +
        '      <i class="icon material-icons md-only">more_vert</i>' +
        '    </a>' +
        '  </div>' +
        '</div>' +
        '<div class="card-content">' +
        '  <table>' +
        '    <thead>' +
        '      <tr>' +
        '        <th class="checkbox-cell">' +
        '          <label class="checkbox">' +
        '            <input type="checkbox">' +
        '            <i class="icon-checkbox"></i>' +
        '          </label>' +
        '        </th>' +
        '        <th class="label-cell">Desert (100g serving)</th>' +
        '        <th class="numeric-cell">Calories</th>' +
        '        <th></th>' +
        '      </tr>' +
        '    </thead>' +
        '    <tbody>' +
        '      <tr>' +
        '        <td class="checkbox-cell">' +
        '          <label class="checkbox">' +
        '            <input type="checkbox">' +
        '            <i class="icon-checkbox"></i>' +
        '          </label>' +
        '        </td>' +
        '        <td class="label-cell">Frozen yogurt</td>' +
        '        <td class="numeric-cell">159</td>' +
        '        <td class="actions-cell">' +
        '          <a class="link icon-only">' +
        '            <i class="icon f7-icons ios-only">compose</i>' +
        '            <i class="icon material-icons md-only">edit</i>' +
        '          </a>' +
        '          <a class="link icon-only">' +
        '            <i class="icon f7-icons ios-only">trash</i>' +
        '            <i class="icon material-icons md-only">delete</i>' +
        '          </a>' +
        '        </td>' +
        '      </tr>' +
        '    </tbody>' +
        '  </table>' +
        '</div>' +
        '</div> ',
    category: {
        label: 'Table Card',
        open: false
    }
});

blockManager.add('table_sortable_card', {
    label: 'Sortable',
    attributes: {
        class: 'fa fa-square',
        title: 'Table With Sortable'
    },
    content: '<div class="data-table data-table-init card">' +
        '  <div class="card-header">' +
        '    <div class="data-table-title">Nutrition</div>' +
        '    <div class="data-table-actions">' +
        '      <a class="link icon-only">' +
        '        <i class="icon f7-icons ios-only">sort</i>' +
        '        <i class="icon material-icons md-only">sort</i>' +
        '      </a>' +
        '      <a class="link icon-only">' +
        '        <i class="icon f7-icons ios-only">more_vertical_round</i>' +
        '        <i class="icon material-icons md-only">more_vert</i>' +
        '      </a>' +
        '    </div>' +
        '  </div>' +
        '  <div class="card-content">' +
        '    <table>' +
        '      <thead>' +
        '        <tr>' +
        '          <th class="checkbox-cell">' +
        '            <label class="checkbox">' +
        '              <input type="checkbox">' +
        '              <i class="icon-checkbox"></i>' +
        '            </label>' +
        '          </th>' +
        '          <th class="label-cell sortable-cell sortable-cell-active">Desert (100g serving)</th>' +
        '          <th class="numeric-cell sortable-cell">Calories</th>' +
        '          <th class="numeric-cell sortable-cell">Fat (g)</th>' +
        '          <th class="numeric-cell sortable-cell">Carbs</th>' +
        '          <th class="numeric-cell sortable-cell">Protein (g)</th>' +
        '        </tr>' +
        '      </thead>' +
        '      <tbody>' +
        '        <tr>' +
        '          <td class="checkbox-cell">' +
        '            <label class="checkbox">' +
        '              <input type="checkbox">' +
        '              <i class="icon-checkbox"></i>' +
        '            </label>' +
        '          </td>' +
        '          <td class="label-cell">Frozen yogurt</td>' +
        '          <td class="numeric-cell">159</td>' +
        '          <td class="numeric-cell">6.0</td>' +
        '          <td class="numeric-cell">24</td>' +
        '          <td class="numeric-cell">4.0</td>' +
        '        </tr>' +
        '      </tbody>' +
        '    </table>' +
        '  </div>' +
        '</div>',
    category: {
        label: 'Table Card',
        open: false
    }
});

blockManager.add('table_collapsible_card', {
    label: 'Collapsible',
    attributes: {
        class: 'fa fa-square',
        title: 'Table With Collapsible'
    },
    content: '<div class="data-table data-table-collapsible data-table-init card">' +
        '  <div class="card-header">' +
        '    <div class="data-table-title">Nutrition</div>' +
        '    <div class="data-table-actions">' +
        '      <a class="link icon-only">' +
        '        <i class="icon f7-icons ios-only">sort</i>' +
        '        <i class="icon material-icons md-only">sort</i>' +
        '      </a>' +
        '      <a class="link icon-only">' +
        '        <i class="icon f7-icons ios-only">more_vertical_round</i>' +
        '        <i class="icon material-icons md-only">more_vert</i>' +
        '      </a>' +
        '    </div>' +
        '  </div>' +
        '  <div class="card-content">' +
        '    <table>' +
        '      <thead>' +
        '        <tr>' +
        '          <th class="label-cell">Desert (100g serving)</th>' +
        '          <th class="numeric-cell">Calories</th>    ' +
        '          <th class="numeric-cell">Protein (g)</th>' +
        '        </tr>' +
        '      </thead>' +
        '      <tbody>' +
        '        <tr>' +
        '          <td class="label-cell">Frozen yogurt</td>' +
        '          <td class="numeric-cell">159</td>' +
        '          <td class="numeric-cell">4.0</td>' +
        '        </tr>' +
        '      </tbody>' +
        '    </table>' +
        '  </div>' +
        '</div>',
    category: {
        label: 'Table Card',
        open: false
    }
});