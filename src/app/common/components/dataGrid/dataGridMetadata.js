/* eslint-disable max-classes-per-file */
class TableDefinition {
  constructor(name, id) {
    this.id = id;
    this.name = name;
    // other properties
    this.columnConfig = [];
  }

  addColumn(columnConfig) {
    this.columnConfig.push(columnConfig);
  }

  getColumns() {
    return this.columnConfig ? this.columnConfig : [];
  }
}

class ColumnDefinition {
  constructor(id, header, dataField, visibility = true, isAction = false) {
    this.id = id;
    this.header = header;
    this.visibility = visibility;
    this.isAction = isAction;
    this.actions = [];
    this.FilterDefination = null;
    this.dataField = dataField;
  }

  addFilterDefinition(filterDef) {
    this.FilterDefination = filterDef;
  }

  addAction(action) {
    if (!this.isAction) {
      throw new Error(
        'Action can not be added to this column. Please make isAction = true.',
      );
    }
    // TODO: check for duplicate action
    // TODO: Add the action for the column
    this.actions.push(action);
  }
}

class FilterDefination {
  constructor(enableFilter, filterType) {
    this.enableFilter = enableFilter;
    this.filterType = filterType;
  }
}

class ActionDefinition {
  constructor(id, name, icon, actionHandler, order) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.actionHandler = actionHandler;
    this.disabled = false;
    this.order = order;
  }
}

export {
  TableDefinition,
  ColumnDefinition,
  FilterDefination,
  ActionDefinition,
};
