<template>
  <div class="home-page">

    <div class="dashboard">
      <div class="dashboard__card today">
        <h2>
          Події сьогодні:
        </h2>
        <p>
          Аукціон
        </p>
        <p>
          UA-2023-10-18-010347-a
        </p>
        <p>
          Дата: {{dayjs().format('DD MMM YYYY, HH:mm')}}
        </p>
      </div>
      <div class="dashboard__card tomorrow">
        <h2>
          Події на завтра:
        </h2>
        <p>
          Документи переможця
        </p>
        <p>
          UA-2023-10-18-010347-a
        </p>
        <p>
          Дата: {{dayjs().format('DD MMM YYYY, HH:mm')}}
        </p>
      </div>
      <div class="dashboard__card tomorrow">
        <h2>
          Події на завтра:
        </h2>
        <p>
          Документи переможця
        </p>
        <p>
          UA-2023-10-18-010347-a
        </p>
        <p>
          Дата: {{dayjs().format('DD MMM YYYY, HH:mm')}}
        </p>
      </div>
    </div>
    <div class="table-actions">
      <Button>
        Фільтр
      </Button>
    </div>
    <div class="table-wrapper">
      <table class="table">
        <tr class="table__head">
          <th width="60px">#</th>
          <th>Клієнт</th>
          <th>Тендер</th>
          <th>Створено</th>
          <th>Статус</th>
          <th>Виконує</th>
          <th>Дії</th>
        </tr>
        <tr
            v-for="(row, idx) of orders"
            class="table__row"
        >
          <td>
            {{idx + 1}}
          </td>
          <template v-for="(item, key, idx) of row">
            <td
                v-if="idx > 0"
                :data-cell="key"
            >
              {{key === 'created_at' ? dayjs(item).format('DD MMM YYYY') : key === 'status' ? !item ? 'Новий' : 'В роботі' : item}}
            </td>

          </template>
          <td>
            <Dropdown
                v-model="employee"
                :options="employes"
                option-label="name"
                placeholder="Виберіть"
                class="table__dropdown"
            />
          </td>
          <td>
            <Button>+</Button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import { inject } from 'vue';
const dayjs = inject("dayjs");


const employee = ref(null);
const employes = ref([
  {
    name: 'Артем'
  },
  {
    name: 'Максим'
  }
]);

const orders = ref([
  {
    id: 1,
    name: 'ТОВ Агротехцентр',
    link: 'UA-2023-10-18-010347-a',
    created_at: '02.02.2024',
    status: 0,
  },
  {
    id: 2,
    name: 'ФОП Лукьяненко О. Р.',
    link: 'UA-2023-10-18-010347-a',
    created_at: '02.02.2024',
    status: 0,
  },
  {
    id: 3,
    name: 'ФОП Лукьяненко О. Р.',
    link: 'UA-2023-10-18-010347-a',
    created_at: '02.02.2024',
    status: 0,
  },
  {
    id: 4,
    name: 'ФОП Лукьяненко О. Р.',
    link: 'UA-2023-10-18-010347-a',
    created_at: '02.02.2024',
    status: 0,
  },
])
</script>

<style lang="scss">
.dashboard {
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;

  &__card {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    border: 1px solid rgba(18, 18, 23, 0.2);
    border-radius: 9px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);

    &.today {
      background: rgba(254, 202, 202, 0.2);
    }

    &.tomorrow {
      background: rgba(202, 156, 4, 0.2);
    }
  }
}
.home-page {
  padding: 40px 48px;


  .table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;

    &-wrapper {
      display: flex;
      border: 1px solid rgba(18, 18, 23, 0.2);
      border-radius: 9px;
      overflow: hidden;
    }

    &__row {
      text-align: center;

      & td {
        padding: 10px;
        text-overflow: ellipsis;

        overflow: hidden;
        white-space: nowrap;
        width: auto;

        &[data-cell='status'] {
          width: 1%;
        }
      }

      &:not(:last-child) {
        border-bottom: 1px solid rgba(18, 18, 23, 0.2);
      }
    }

    &__head {
      background: #000;
      border-radius: 9px;

      & th {
        padding: 20px 10px;
        color: #fff;
      }
    }

    &__dropdown {
      width: 100%;
    }
  }
}
</style>
