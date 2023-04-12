import '../globals.css'

import MyIcon from '@/assets/icons/Icon'
import { Button, ColorButton, ColorIconButton, FabButton, IconButton } from '@/components/Buttons/Button'

const MobileTimer = () => {
  return (
    <>
      <h1 className="text-header1 font-roboto text-primary">Icon Components</h1>
      <div className="text-primary h-full pl-4 font-roboto text-header2">Icons size = sm</div>
      <div className="pl-12">
        <div className="flex snap-center flex-col">
          <div className="flex flex-row align-middle items-baseline flex-wrap">
            <MyIcon size="sm" icon="archive" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="bag" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="bandaid" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="bank" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="basketball" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="battery" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="beer" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="bell" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="box" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="briefcase" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="browser" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="browser" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="brush" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="building" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="bus" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="calendar" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="car" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="clock" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="closedBook" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="cloud" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="cog" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="comment" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="comments" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="compass" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="creditCard" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="dashboard" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="deadtree" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="dislike" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="envelope" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="equaliser" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="eye" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="file1" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="file2" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="file3" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="filmCamera" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="filmStrip" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="folder" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="gamepad" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="glasses" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="globe1" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="globe2" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="hardDrive" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="headphones" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="heart" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="house" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="idCard" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="imac" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="iphone" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="key" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="leaf" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="lifeBuoy" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="lightBulb" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="like" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="lineChart" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="location" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="lock" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="macbook" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="magnifier" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="man" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="map" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="martini" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="medal" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="medkit" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="microphone" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="modem" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="openedBook" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="pen" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="pencil" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="phone" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="photoCamera" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="piano" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="pieChart" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="pill" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="pipeChart" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="plane" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="present" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="presentation" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="pricetag" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="printer" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="ribbon" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="rocket" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="ruler" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="server" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="shop" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="shoppingCard" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="shorts" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="speaker" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="star" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="subwoofer" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="sun" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="target" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="tea" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="trash" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="tree" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="trophy" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="tshirt" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="umbrella" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="wallet" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="woman" className={`fill-secondary m-1`} />
            <MyIcon size="sm" icon="wrench" className={`fill-secondary m-1`} />
          </div>
        </div>
      </div>
      <hr />
      <div className="text-primary h-full pl-4 font-roboto text-header2">Icons size = md</div>
      <div className="pl-12">
        <div className="flex snap-center flex-col">
          <div className="flex flex-row align-middle items-baseline flex-wrap">
            <MyIcon size="md" icon="archive" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="bag" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="bandaid" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="bank" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="basketball" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="battery" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="beer" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="bell" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="box" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="briefcase" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="browser" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="browser" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="brush" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="building" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="bus" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="calendar" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="car" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="clock" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="closedBook" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="cloud" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="cog" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="comment" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="comments" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="compass" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="creditCard" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="dashboard" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="deadtree" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="dislike" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="envelope" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="equaliser" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="eye" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="file1" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="file2" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="file3" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="filmCamera" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="filmStrip" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="folder" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="gamepad" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="glasses" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="globe1" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="globe2" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="hardDrive" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="headphones" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="heart" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="house" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="idCard" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="imac" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="iphone" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="key" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="leaf" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="lifeBuoy" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="lightBulb" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="like" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="lineChart" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="location" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="lock" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="macbook" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="magnifier" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="man" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="map" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="martini" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="medal" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="medkit" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="microphone" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="modem" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="openedBook" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="pen" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="pencil" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="phone" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="photoCamera" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="piano" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="pieChart" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="pill" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="pipeChart" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="plane" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="present" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="presentation" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="pricetag" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="printer" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="ribbon" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="rocket" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="ruler" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="server" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="shop" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="shoppingCard" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="shorts" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="speaker" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="star" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="subwoofer" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="sun" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="target" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="tea" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="trash" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="tree" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="trophy" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="tshirt" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="umbrella" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="wallet" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="woman" className={`fill-secondary m-1`} />
            <MyIcon size="md" icon="wrench" className={`fill-secondary m-1`} />
          </div>
        </div>
      </div>
      <hr />
      <div className="text-primary h-full pl-4 font-roboto text-header2">Icons size = lg</div>
      <div className="pl-12">
        <div className="flex snap-center flex-col">
          <div className="flex flex-row align-middle items-baseline flex-wrap">
            <MyIcon size="lg" icon="archive" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="bag" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="bandaid" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="bank" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="basketball" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="battery" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="beer" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="bell" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="box" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="briefcase" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="browser" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="browser" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="brush" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="building" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="bus" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="calendar" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="car" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="clock" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="closedBook" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="cloud" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="cog" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="comment" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="comments" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="compass" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="creditCard" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="dashboard" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="deadtree" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="dislike" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="envelope" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="equaliser" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="eye" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="file1" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="file2" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="file3" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="filmCamera" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="filmStrip" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="folder" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="gamepad" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="glasses" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="globe1" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="globe2" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="hardDrive" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="headphones" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="heart" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="house" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="idCard" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="imac" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="iphone" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="key" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="leaf" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="lifeBuoy" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="lightBulb" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="like" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="lineChart" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="location" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="lock" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="macbook" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="magnifier" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="man" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="map" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="martini" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="medal" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="medkit" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="microphone" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="modem" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="openedBook" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="pen" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="pencil" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="phone" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="photoCamera" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="piano" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="pieChart" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="pill" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="pipeChart" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="plane" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="present" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="presentation" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="pricetag" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="printer" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="ribbon" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="rocket" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="ruler" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="server" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="shop" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="shoppingCard" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="shorts" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="speaker" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="star" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="subwoofer" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="sun" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="target" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="tea" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="trash" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="tree" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="trophy" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="tshirt" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="umbrella" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="wallet" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="woman" className={`fill-secondary m-1`} />
            <MyIcon size="lg" icon="wrench" className={`fill-secondary m-1`} />
          </div>
        </div>
      </div>
      <hr />
      <div className="text-primary h-full pl-4 font-roboto text-header2">Icons size = xl</div>
      <div className="pl-12">
        <div className="flex snap-center flex-col">
          <div className="flex flex-row align-middle items-baseline flex-wrap">
            <MyIcon size="xl" icon="archive" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="bag" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="bandaid" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="bank" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="basketball" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="battery" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="beer" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="bell" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="box" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="briefcase" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="browser" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="browser" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="brush" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="building" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="bus" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="calendar" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="car" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="clock" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="closedBook" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="cloud" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="cog" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="comment" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="comments" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="compass" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="creditCard" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="dashboard" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="deadtree" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="dislike" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="envelope" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="equaliser" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="eye" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="file1" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="file2" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="file3" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="filmCamera" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="filmStrip" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="folder" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="gamepad" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="glasses" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="globe1" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="globe2" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="hardDrive" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="headphones" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="heart" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="house" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="idCard" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="imac" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="iphone" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="key" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="leaf" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="lifeBuoy" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="lightBulb" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="like" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="lineChart" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="location" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="lock" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="macbook" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="magnifier" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="man" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="map" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="martini" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="medal" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="medkit" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="microphone" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="modem" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="openedBook" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="pen" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="pencil" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="phone" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="photoCamera" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="piano" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="pieChart" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="pill" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="pipeChart" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="plane" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="present" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="presentation" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="pricetag" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="printer" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="ribbon" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="rocket" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="ruler" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="server" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="shop" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="shoppingCard" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="shorts" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="speaker" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="star" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="subwoofer" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="sun" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="target" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="tea" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="trash" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="tree" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="trophy" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="tshirt" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="umbrella" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="wallet" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="woman" className={`fill-secondary m-1`} />
            <MyIcon size="xl" icon="wrench" className={`fill-secondary m-1`} />
          </div>
        </div>
      </div>
      <hr />
      <h1 className="text-header1 font-roboto text-primary">Buttom Components</h1>
      <div className="text-primary h-full pl-4 font-roboto text-header2">Buttons</div>
      <div className="pl-12">
        <div className="flex snap-center flex-col">
          <div className="flex flex-row align-middle items-baseline">
            <Button label={'iniciar'} type={'primary'} size={'sm'}></Button>
            <Button label={'iniciar'} type={'primary'} size={'md'}></Button>
            <Button label={'iniciar'} type={'primary'} size={'lg'}></Button>
            <Button label={'iniciar'} type={'primary'} size={'xl'}></Button>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <Button label={'iniciar'} type={'secondary'} size={'sm'}></Button>
            <Button label={'iniciar'} type={'secondary'} size={'md'}></Button>
            <Button label={'iniciar'} type={'secondary'} size={'lg'}></Button>
            <Button label={'iniciar'} type={'secondary'} size={'xl'}></Button>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <Button label={'iniciar'} type={'info'} size={'sm'}></Button>
            <Button label={'iniciar'} type={'info'} size={'md'}></Button>
            <Button label={'iniciar'} type={'info'} size={'lg'}></Button>
            <Button label={'iniciar'} type={'info'} size={'xl'}></Button>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <Button label={'iniciar'} type={'alert'} size={'sm'}></Button>
            <Button label={'iniciar'} type={'alert'} size={'md'}></Button>
            <Button label={'iniciar'} type={'alert'} size={'lg'}></Button>
            <Button label={'iniciar'} type={'alert'} size={'xl'}></Button>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <Button label={'iniciar'} type={'error'} size={'sm'}></Button>
            <Button label={'iniciar'} type={'error'} size={'md'}></Button>
            <Button label={'iniciar'} type={'error'} size={'lg'}></Button>
            <Button label={'iniciar'} type={'error'} size={'xl'}></Button>
          </div>
        </div>
      </div>
      <hr /> <div className="text-primary h-full pl-4 font-roboto text-header2">IconButtons</div>
      <div className="pl-12">
        <div className="flex snap-center flex-col">
          <div className="flex flex-row align-middle items-baseline">
            <IconButton label={'iniciar'} type={'primary'} size={'sm'}></IconButton>
            <IconButton label={'iniciar'} type={'primary'} size={'md'}></IconButton>
            <IconButton label={'iniciar'} type={'primary'} size={'lg'}></IconButton>
            <IconButton label={'iniciar'} type={'primary'} size={'xl'}></IconButton>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <IconButton label={'iniciar'} type={'secondary'} size={'sm'}></IconButton>
            <IconButton label={'iniciar'} type={'secondary'} size={'md'}></IconButton>
            <IconButton label={'iniciar'} type={'secondary'} size={'lg'}></IconButton>
            <IconButton label={'iniciar'} type={'secondary'} size={'xl'}></IconButton>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <IconButton label={'iniciar'} type={'info'} size={'sm'}></IconButton>
            <IconButton label={'iniciar'} type={'info'} size={'md'}></IconButton>
            <IconButton label={'iniciar'} type={'info'} size={'lg'}></IconButton>
            <IconButton label={'iniciar'} type={'info'} size={'xl'}></IconButton>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <IconButton label={'iniciar'} type={'alert'} size={'sm'}></IconButton>
            <IconButton label={'iniciar'} type={'alert'} size={'md'}></IconButton>
            <IconButton label={'iniciar'} type={'alert'} size={'lg'}></IconButton>
            <IconButton label={'iniciar'} type={'alert'} size={'xl'}></IconButton>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <IconButton label={'iniciar'} type={'error'} size={'sm'}></IconButton>
            <IconButton label={'iniciar'} type={'error'} size={'md'}></IconButton>
            <IconButton label={'iniciar'} type={'error'} size={'lg'}></IconButton>
            <IconButton label={'iniciar'} type={'error'} size={'xl'}></IconButton>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-primary h-full pl-4 font-roboto text-header2">ColorButons</div>
      <div className="pl-12">
        <div className="flex snap-center flex-col">
          <div className="flex flex-row align-middle items-baseline">
            <ColorButton label={'iniciar'} type={'primary'} size={'sm'}></ColorButton>
            <ColorButton label={'iniciar'} type={'primary'} size={'md'}></ColorButton>
            <ColorButton label={'iniciar'} type={'primary'} size={'lg'}></ColorButton>
            <ColorButton label={'iniciar'} type={'primary'} size={'xl'}></ColorButton>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <ColorButton label={'iniciar'} type={'secondary'} size={'sm'}></ColorButton>
            <ColorButton label={'iniciar'} type={'secondary'} size={'md'}></ColorButton>
            <ColorButton label={'iniciar'} type={'secondary'} size={'lg'}></ColorButton>
            <ColorButton label={'iniciar'} type={'secondary'} size={'xl'}></ColorButton>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <ColorButton label={'iniciar'} type={'info'} size={'sm'}></ColorButton>
            <ColorButton label={'iniciar'} type={'info'} size={'md'}></ColorButton>
            <ColorButton label={'iniciar'} type={'info'} size={'lg'}></ColorButton>
            <ColorButton label={'iniciar'} type={'info'} size={'xl'}></ColorButton>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <ColorButton label={'iniciar'} type={'alert'} size={'sm'}></ColorButton>
            <ColorButton label={'iniciar'} type={'alert'} size={'md'}></ColorButton>
            <ColorButton label={'iniciar'} type={'alert'} size={'lg'}></ColorButton>
            <ColorButton label={'iniciar'} type={'alert'} size={'xl'}></ColorButton>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <ColorButton label={'iniciar'} type={'error'} size={'sm'}></ColorButton>
            <ColorButton label={'iniciar'} type={'error'} size={'md'}></ColorButton>
            <ColorButton label={'iniciar'} type={'error'} size={'lg'}></ColorButton>
            <ColorButton label={'iniciar'} type={'error'} size={'xl'}></ColorButton>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-primary h-full pl-4 font-roboto text-header2">ColorButons</div>
      <div className="pl-12">
        <div className="flex snap-center flex-col">
          <div className="flex flex-row align-middle items-baseline">
            <ColorIconButton label={'iniciar'} type={'primary'} size={'sm'}></ColorIconButton>
            <ColorIconButton label={'iniciar'} type={'primary'} size={'md'}></ColorIconButton>
            <ColorIconButton label={'iniciar'} type={'primary'} size={'lg'}></ColorIconButton>
            <ColorIconButton label={'iniciar'} type={'primary'} size={'xl'}></ColorIconButton>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <ColorIconButton label={'iniciar'} type={'secondary'} size={'sm'}></ColorIconButton>
            <ColorIconButton label={'iniciar'} type={'secondary'} size={'md'}></ColorIconButton>
            <ColorIconButton label={'iniciar'} type={'secondary'} size={'lg'}></ColorIconButton>
            <ColorIconButton label={'iniciar'} type={'secondary'} size={'xl'}></ColorIconButton>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <ColorIconButton label={'iniciar'} type={'info'} size={'sm'}></ColorIconButton>
            <ColorIconButton label={'iniciar'} type={'info'} size={'md'}></ColorIconButton>
            <ColorIconButton label={'iniciar'} type={'info'} size={'lg'}></ColorIconButton>
            <ColorIconButton label={'iniciar'} type={'info'} size={'xl'}></ColorIconButton>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <ColorIconButton label={'iniciar'} type={'alert'} size={'sm'}></ColorIconButton>
            <ColorIconButton label={'iniciar'} type={'alert'} size={'md'}></ColorIconButton>
            <ColorIconButton label={'iniciar'} type={'alert'} size={'lg'}></ColorIconButton>
            <ColorIconButton label={'iniciar'} type={'alert'} size={'xl'}></ColorIconButton>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <ColorIconButton label={'iniciar'} type={'error'} size={'sm'}></ColorIconButton>
            <ColorIconButton label={'iniciar'} type={'error'} size={'md'}></ColorIconButton>
            <ColorIconButton label={'iniciar'} type={'error'} size={'lg'}></ColorIconButton>
            <ColorIconButton label={'iniciar'} type={'error'} size={'xl'}></ColorIconButton>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-primary h-full pl-4 font-roboto text-header2">ColorButons</div>
      <div className="pl-12">
        <div className="flex snap-center flex-col">
          <div className="flex flex-row align-middle items-baseline">
            <FabButton label={'iniciar'} type={'primary'} size={'sm'}></FabButton>
            <FabButton label={'iniciar'} type={'primary'} size={'md'}></FabButton>
            <FabButton label={'iniciar'} type={'primary'} size={'lg'}></FabButton>
            <FabButton label={'iniciar'} type={'primary'} size={'xl'}></FabButton>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <FabButton label={'iniciar'} type={'secondary'} size={'sm'}></FabButton>
            <FabButton label={'iniciar'} type={'secondary'} size={'md'}></FabButton>
            <FabButton label={'iniciar'} type={'secondary'} size={'lg'}></FabButton>
            <FabButton label={'iniciar'} type={'secondary'} size={'xl'}></FabButton>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <FabButton label={'iniciar'} type={'info'} size={'sm'}></FabButton>
            <FabButton label={'iniciar'} type={'info'} size={'md'}></FabButton>
            <FabButton label={'iniciar'} type={'info'} size={'lg'}></FabButton>
            <FabButton label={'iniciar'} type={'info'} size={'xl'}></FabButton>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <FabButton label={'iniciar'} type={'alert'} size={'sm'}></FabButton>
            <FabButton label={'iniciar'} type={'alert'} size={'md'}></FabButton>
            <FabButton label={'iniciar'} type={'alert'} size={'lg'}></FabButton>
            <FabButton label={'iniciar'} type={'alert'} size={'xl'}></FabButton>
          </div>
          <div className="flex flex-row align-middle items-baseline">
            <FabButton label={'iniciar'} type={'error'} size={'sm'}></FabButton>
            <FabButton label={'iniciar'} type={'error'} size={'md'}></FabButton>
            <FabButton label={'iniciar'} type={'error'} size={'lg'}></FabButton>
            <FabButton label={'iniciar'} type={'error'} size={'xl'}></FabButton>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default MobileTimer
