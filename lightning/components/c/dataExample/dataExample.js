import { LightningElement, api, track } from 'lwc';

export default class DataExample extends LightningElement {
    @api placeholder = '';

    @track items = [];
    inputValue = '';

    handleChange(event) {
        this.inputValue = event.target.value;
    }

    handleSave() {
        const id = Math.random().toString(16).slice(2).toString();
        this.items.push({ id, value: this.inputValue });

        this.inputValue = '';
    }

    handleRemoveItem({ detail }) {
        this.items = this.items.filter(item => item.id !== detail.id);
    }
}
