import { Entity, model, property } from '@loopback/repository';

@model({ settings: {} })
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      maxLength: 100
    }
  })
  fio: string;

  @property({
    type: 'date',
    required: true,
  })
  birthday: string;

  @property({
    type: 'string',
  })
  city?: string;

  @property({
    type: 'string',
  })
  phone?: string;


  constructor(data?: Partial<User>) {
    super(data);
  }
}
