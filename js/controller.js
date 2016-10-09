define(
    'controller',
    [
        'jquery',
        'model',
        'view'
    ],
    function() {
        function Controller(model, view) {
            var self = this;

            view.elements.addBtn.bind("click", addItem);
            view.elements.listContainer.bind("click", '.item-delete', removeItem);

            function addItem() {
                var newItem = view.elements.input.val();

                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            }

            function removeItem(event) {
                var item = $(event.target).attr('data-value');

                model.removeItem(item);
                view.renderList(model.data);
            }
        }
        return Controller;
    }
);
