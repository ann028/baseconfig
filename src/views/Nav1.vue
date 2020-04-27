<template>
  <div class="main" >
    <div class="content">
      <div class="calender">
            <!-- locale="zh-cn" -->
          <fullcalendar
            defaultview="dayGridMonth"
            :plugins = "calendarPlugins"
            :header = "header"
            :selected="true"
            :events = "events"
            @dateClick="dateClick"
            :selectable = "true"
            :dayRender ="dayRender"
            eventColor = 'red'
          ></fullcalendar>
      </div>
      
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import fullcalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
// import '@fullcalendar/core/main.css';

@Component({
  components: {
    fullcalendar,
  },
})
export default class Nav extends Vue {
  private calendarPlugins = [ dayGridPlugin, interactionPlugin ]
  private header = {
    left: 'title',
    center: '',
    right: ' prevYear, prev, next, nextYear',
  }
  private events = [
    {
      id: 1,
      title: '3',
      start: new Date(),
    },
    {
      id: 2,
      title: '3',
      start: '2020-04-01',
    },
    {
      id: 4,
      title: '2',
      start: '2020-04-01',
    },
    {
      id: 3,
      title: '5',
      start: '2020-04-11',
    },
  ]
  private dateClick(tt: any) {
    console.log(tt.dateStr)
  }
  private dayRender(view: any, el: any) {
    console.log(view, el)
  }
}
</script>
<style lang="less" scoped>
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
.main{
  .progress{
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .calender {
    width: 70%;
    height: 70%;
  }
  /deep/.fc-ltr .fc-dayGrid-view .fc-day-top .fc-day-number{
    float: left;
  }
  /deep/.fc-event {
    width: 12px;
    height: 14px;
    border-radius: 50%;
  }
  /deep/.fc-content{
    line-height: 15px;
    text-align: center;
  }
  /deep/.fc-event-container{
    float: right;
  }
}
</style>
