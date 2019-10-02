/**
 * @fileoverview Requires all requests to be relative to their current context path
 * @author Brendan
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-absolute-path-references')

var RuleTester = require('eslint').RuleTester

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('no-absolute-path-references', rule, {
  valid: [
    { code: "url = 'services' + '/service'" },
    { code: "url = './services'" },
    { code: "Cometd.Comet.subscribe('/' + id, options.success)" },
    { code: "Cometd.Comet.subscribe('/channel')" },
    { code: "url = '../services'" },
    { code: "url = '/service/cometdchannel'" },
  ],

  invalid: [
    {
      code: "url = '/services'",
      errors: [
        {
          message: 'Do not use absolute-path references',
          type: 'Literal',
        },
      ],
    },
    {
      code: "url = '/services' + '/service'",
      errors: [
        {
          message: 'Do not concatenate absolute-path references',
          type: 'Literal',
        },
      ],
    },
  ],
})
