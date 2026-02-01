import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module001Module } from './modules/module001/module001.module';
import { Module002Module } from './modules/module002/module002.module';
import { Module003Module } from './modules/module003/module003.module';
import { Module004Module } from './modules/module004/module004.module';
import { Module005Module } from './modules/module005/module005.module';
import { Module006Module } from './modules/module006/module006.module';
import { Module007Module } from './modules/module007/module007.module';
import { Module008Module } from './modules/module008/module008.module';
import { Module009Module } from './modules/module009/module009.module';
import { Module010Module } from './modules/module010/module010.module';
import { Module011Module } from './modules/module011/module011.module';
import { Module012Module } from './modules/module012/module012.module';
import { Module013Module } from './modules/module013/module013.module';
import { Module014Module } from './modules/module014/module014.module';
import { Module015Module } from './modules/module015/module015.module';
import { Module016Module } from './modules/module016/module016.module';
import { Module017Module } from './modules/module017/module017.module';
import { Module018Module } from './modules/module018/module018.module';
import { Module019Module } from './modules/module019/module019.module';
import { Module020Module } from './modules/module020/module020.module';
import { Module021Module } from './modules/module021/module021.module';
import { Module022Module } from './modules/module022/module022.module';
import { Module023Module } from './modules/module023/module023.module';
import { Module024Module } from './modules/module024/module024.module';
import { Module025Module } from './modules/module025/module025.module';
import { Module026Module } from './modules/module026/module026.module';
import { Module027Module } from './modules/module027/module027.module';
import { Module028Module } from './modules/module028/module028.module';
import { Module029Module } from './modules/module029/module029.module';
import { Module030Module } from './modules/module030/module030.module';
import { Module031Module } from './modules/module031/module031.module';
import { Module032Module } from './modules/module032/module032.module';
import { Module033Module } from './modules/module033/module033.module';
import { Module034Module } from './modules/module034/module034.module';
import { Module035Module } from './modules/module035/module035.module';
import { Module036Module } from './modules/module036/module036.module';
import { Module037Module } from './modules/module037/module037.module';
import { Module038Module } from './modules/module038/module038.module';
import { Module039Module } from './modules/module039/module039.module';
import { Module040Module } from './modules/module040/module040.module';
import { Module041Module } from './modules/module041/module041.module';
import { Module042Module } from './modules/module042/module042.module';
import { Module043Module } from './modules/module043/module043.module';
import { Module044Module } from './modules/module044/module044.module';
import { Module045Module } from './modules/module045/module045.module';
import { Module046Module } from './modules/module046/module046.module';
import { Module047Module } from './modules/module047/module047.module';
import { Module048Module } from './modules/module048/module048.module';
import { Module049Module } from './modules/module049/module049.module';
import { Module050Module } from './modules/module050/module050.module';
import { Module051Module } from './modules/module051/module051.module';
import { Module052Module } from './modules/module052/module052.module';
import { Module053Module } from './modules/module053/module053.module';
import { Module054Module } from './modules/module054/module054.module';
import { Module055Module } from './modules/module055/module055.module';
import { Module056Module } from './modules/module056/module056.module';
import { Module057Module } from './modules/module057/module057.module';
import { Module058Module } from './modules/module058/module058.module';
import { Module059Module } from './modules/module059/module059.module';
import { Module060Module } from './modules/module060/module060.module';
import { Module061Module } from './modules/module061/module061.module';
import { Module062Module } from './modules/module062/module062.module';
import { Module063Module } from './modules/module063/module063.module';
import { Module064Module } from './modules/module064/module064.module';
import { Module065Module } from './modules/module065/module065.module';
import { Module066Module } from './modules/module066/module066.module';
import { Module067Module } from './modules/module067/module067.module';
import { Module068Module } from './modules/module068/module068.module';
import { Module069Module } from './modules/module069/module069.module';
import { Module070Module } from './modules/module070/module070.module';
import { Module071Module } from './modules/module071/module071.module';
import { Module072Module } from './modules/module072/module072.module';
import { Module073Module } from './modules/module073/module073.module';
import { Module074Module } from './modules/module074/module074.module';
import { Module075Module } from './modules/module075/module075.module';
import { Module076Module } from './modules/module076/module076.module';
import { Module077Module } from './modules/module077/module077.module';
import { Module078Module } from './modules/module078/module078.module';
import { Module079Module } from './modules/module079/module079.module';
import { Module080Module } from './modules/module080/module080.module';
import { Module081Module } from './modules/module081/module081.module';
import { Module082Module } from './modules/module082/module082.module';
import { Module083Module } from './modules/module083/module083.module';
import { Module084Module } from './modules/module084/module084.module';
import { Module085Module } from './modules/module085/module085.module';
import { Module086Module } from './modules/module086/module086.module';
import { Module087Module } from './modules/module087/module087.module';
import { Module088Module } from './modules/module088/module088.module';
import { Module089Module } from './modules/module089/module089.module';
import { Module090Module } from './modules/module090/module090.module';
import { Module091Module } from './modules/module091/module091.module';
import { Module092Module } from './modules/module092/module092.module';
import { Module093Module } from './modules/module093/module093.module';
import { Module094Module } from './modules/module094/module094.module';
import { Module095Module } from './modules/module095/module095.module';
import { Module096Module } from './modules/module096/module096.module';
import { Module097Module } from './modules/module097/module097.module';
import { Module098Module } from './modules/module098/module098.module';
import { Module099Module } from './modules/module099/module099.module';
import { Module100Module } from './modules/module100/module100.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    Module001Module,
    Module002Module,
    Module003Module,
    Module004Module,
    Module005Module,
    Module006Module,
    Module007Module,
    Module008Module,
    Module009Module,
    Module010Module,
    Module011Module,
    Module012Module,
    Module013Module,
    Module014Module,
    Module015Module,
    Module016Module,
    Module017Module,
    Module018Module,
    Module019Module,
    Module020Module,
    Module021Module,
    Module022Module,
    Module023Module,
    Module024Module,
    Module025Module,
    Module026Module,
    Module027Module,
    Module028Module,
    Module029Module,
    Module030Module,
    Module031Module,
    Module032Module,
    Module033Module,
    Module034Module,
    Module035Module,
    Module036Module,
    Module037Module,
    Module038Module,
    Module039Module,
    Module040Module,
    Module041Module,
    Module042Module,
    Module043Module,
    Module044Module,
    Module045Module,
    Module046Module,
    Module047Module,
    Module048Module,
    Module049Module,
    Module050Module,
    Module051Module,
    Module052Module,
    Module053Module,
    Module054Module,
    Module055Module,
    Module056Module,
    Module057Module,
    Module058Module,
    Module059Module,
    Module060Module,
    Module061Module,
    Module062Module,
    Module063Module,
    Module064Module,
    Module065Module,
    Module066Module,
    Module067Module,
    Module068Module,
    Module069Module,
    Module070Module,
    Module071Module,
    Module072Module,
    Module073Module,
    Module074Module,
    Module075Module,
    Module076Module,
    Module077Module,
    Module078Module,
    Module079Module,
    Module080Module,
    Module081Module,
    Module082Module,
    Module083Module,
    Module084Module,
    Module085Module,
    Module086Module,
    Module087Module,
    Module088Module,
    Module089Module,
    Module090Module,
    Module091Module,
    Module092Module,
    Module093Module,
    Module094Module,
    Module095Module,
    Module096Module,
    Module097Module,
    Module098Module,
    Module099Module,
    Module100Module,
  ],
})
export class AppModule {}
