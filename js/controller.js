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

            function addItem() {
                var newItem = view.elements.input.val();

                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            }

            view.elements.listContainer.bind("click", function(event){

                var item = $(event.target).attr('data-value');

                if($(event.target).hasClass('item-delete')){
                    model.removeItem(item);
                    view.renderList(model.data);
                }

                if($(event.target).hasClass('item-edit')){
                    var editedItem = prompt("Edit item", item);
                        model.editItem(item,editedItem);
                        view.renderList(model.data);
                }
            });
        }
        return Controller;
    }
);
