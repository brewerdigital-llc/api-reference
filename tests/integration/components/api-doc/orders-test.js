import { module, test } from 'qunit';
import { setupRenderingTest } from '@fleetbase/api-reference/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | api-doc/orders', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ApiDoc::Orders />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ApiDoc::Orders>
        template block text
      </ApiDoc::Orders>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
