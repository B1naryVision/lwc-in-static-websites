import { LightningElement, api } from 'lwc';

export default class DataExampleItem extends LightningElement {
    @api item;

    handleRemove() {
        this.dispatchEvent(new CustomEvent('remove', {
            detail: { id: this.item.id }
        }));
    }
}
