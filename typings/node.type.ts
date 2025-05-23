export type Node = {
  id: string;
  type: string;
  position: {
    x: number;
    y: number;
  };
  data: {
    id: string;
    component_key: string;
    component_type: string;
    component_id: string;
    name: string;
    prerequisites: [string, string];
    permitted_roles: [];
    input_mapping: object;
    sla_duration: {
      number: number;
      unit: string;
    };
    approval_required: false;
    approval_roles: [];
  };
};
