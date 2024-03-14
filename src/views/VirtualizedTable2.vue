<template>
   <div style="position: relative;height: 300px; width: 700px; border: 1px solid #ddd; overflow: auto; will-change: transform;padding: 10px;"  
   @scroll="onScroll" @wheel="onWheel" ref="scrollRef" id="div1">
    <div :style="'height: ' + (totalRow *  rowHeight) + 'px;'" id="div2">
      <div v-for="row in showData" style="display: flex; position: absolute;  " 
      :class="row.rowIndex"
      :style="'top:' + row.rowIndex * rowHeight + 'px;height:' + rowHeight + 'px;'">
       <div v-for="i in 10" style="width: 150px;">{{  row['column-' + (i - 1)] }} </div>
      </div>
    </div>
   </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive, computed, ref, unref } from 'vue';
  import type { Ref } from 'vue'

  const totalRow = 10000

  const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
    Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150,
    }))
  
  const generateData = (
    columns: ReturnType<typeof generateColumns>,
    length = 200,
    prefix = 'row-'
  ) =>
    Array.from({ length }).map((_, rowIndex) => {
      return columns.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
          return rowData
        },
        {
          id: `${prefix}${rowIndex}`,
          rowIndex: rowIndex,
          parentId: null,
        }
      )
    })
  
  const columns = generateColumns(10)
  const data = generateData(columns, totalRow)
  const showRow = reactive({
    start: 0,
    end: 0
  })
  let rowHeight = 50
  // 根据scrollTop计算开始展示行，每行高50px，则开始展示行为scrollTop / 50
  const showData = computed(() => {
    let scrollTop = states.value.scrollTop
    let num = Math.floor(scrollTop / rowHeight)
    console.log("scrollTop=", scrollTop, num)
    if (num > totalRow - 10) num = totalRow - 10 // 特殊处理， 触底时保底处理
    showRow.start =  num > 0 ? num : 0
    showRow.end = showRow.start + 10
    return data.slice(showRow.start, showRow.end)
  })
  
  const states = ref({
    scrollTop: 0,
    scrollLeft: 0,
  })
  //每次滚动量
  let xOffset = 0
  let yOffset = 0
  let frameHandle : any = null
  const onWheel = (e: WheelEvent) => {
    e.preventDefault()// 阻止默认的weel事件执行
    console.log("wheel 事件")
    window.cancelAnimationFrame(frameHandle);
    let x = e.deltaX; //水平方向的滚动量
    let y = e.deltaY // 垂直方向的滚动量
    // 只保留一个方向
    if (Math.abs(x) > Math.abs(y)) { 
      y = 0
    } else {
      x = 0
    }
    if (y === 0 && x === 0) return // 没有滚动量
    if (x === 0 && y < 0 && states.value.scrollTop <= 0) {
      console.log("已经触顶了")
      return //已经触顶了
    }
    if (x === 0 && y > 0 && states.value.scrollTop >= totalRow * rowHeight - 500 + 300) {
      states.value.scrollTop = scrollRef.value.scrollTop
      console.log('已经触底了')
      return //已经触底了
    }
    if (y === 0 && x < 0 && states.value.scrollLeft <= 0 ) {
      console.log("水平方向已经滚动到最左侧了")
      states.value.scrollLeft = 0;
      x = 0
      return
    }
    if (y === 0 && x > 0 && states.value.scrollLeft > 150 * 10 - 700) {
      console.log('水平方向已经滚动到最右侧了')
      x = 0
      states.value.scrollLeft = scrollRef.value.scrollLeft
      return //已经触底了
    }

    console.log("水平滚动量", x, states.value.scrollLeft)
    console.log("垂直滚动量", y)
    
    // 累加多次的滚动量
    xOffset += x
    yOffset += y
    //  优化性能
    frameHandle = window.requestAnimationFrame(() => {
      onWheelDelta(xOffset, yOffset)
      xOffset = 0
      yOffset = 0
     })
  }

  const onWheelDelta  =  (x: any, y: any) => {
    states.value.scrollLeft += x
    states.value.scrollTop += y
    if (states.value.scrollTop < 0) states.value.scrollTop = 0; // 这里要注意， 
    scrollTo()
  }
  
  const scrollRef : Ref<any> = ref({
    scrollLeft: Number,
    scrollTop: Number
  })
  const scrollTo = () => {
    scrollRef.value.scrollLeft = states.value.scrollLeft
    scrollRef.value.scrollTop = states.value.scrollTop
  }

  
  const onScroll = (e : any) => {
    e.preventDefault() //  阻止触发默认的scroll事件
    const {
          scrollLeft,
          scrollTop,
        } = e.currentTarget;
        const _states = unref(states);
        if (_states.scrollTop === scrollTop && _states.scrollLeft === scrollLeft) {
          return; //  滚轮事件已经触发，不再执行滚动事件
        }
    console.log("滚动事件")
  
   states.value = {
    ...states,
    scrollLeft: scrollLeft,
    scrollTop: Math.max(0, scrollTop)
   }
  }

  </script>
  