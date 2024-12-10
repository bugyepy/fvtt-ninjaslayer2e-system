import NinjaSlayer2eDataModel from "./base-model.mjs";

export default class NinjaSlayer2eItemBase extends NinjaSlayer2eDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = {};

    schema.description = new fields.StringField({ required: true, blank: true });

    return schema;
  }

}